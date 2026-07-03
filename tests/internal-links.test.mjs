import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const APP_DIR = join(ROOT, "src", "app");
const SRC_DIR = join(ROOT, "src");

/** Recursively collect files under `dir` matching one of `exts`. */
function walk(dir, exts, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, exts, out);
    } else if (exts.some((e) => entry.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

/**
 * Derive the set of real routes from the Next.js app directory.
 * - `page.tsx` files define routes
 * - route groups like `(site)` are stripped
 * - dynamic segments like `[slug]` are kept as a `:param` wildcard marker
 */
function discoverRoutes() {
  const routes = new Set();
  for (const file of walk(APP_DIR, ["page.tsx", "page.jsx", "page.ts", "page.js"])) {
    const rel = relative(APP_DIR, file);
    const segments = rel
      .split("/")
      .slice(0, -1) // drop the `page.tsx` filename
      .filter((seg) => !(seg.startsWith("(") && seg.endsWith(")"))) // drop route groups
      .map((seg) => (seg.startsWith("[") ? ":param" : seg));
    routes.add("/" + segments.join("/"));
  }
  return routes;
}

/** Does an internal path match one of the known routes (honoring dynamic segments)? */
function routeExists(pathname, routes) {
  const target = pathname.replace(/\/+$/, "") || "/";
  const targetSegs = target.split("/");
  for (const route of routes) {
    const routeSegs = (route.replace(/\/+$/, "") || "/").split("/");
    if (routeSegs.length !== targetSegs.length) continue;
    const match = routeSegs.every(
      (seg, i) => seg === ":param" || seg === targetSegs[i]
    );
    if (match) return true;
  }
  return false;
}

/**
 * Extract internal link references from a source file.
 * Captures static `href="..."` and `path: "..."` string values.
 * Template literals / expression values (`href={...}`) are data-driven and skipped.
 */
function extractInternalLinks(content) {
  const links = [];
  const patterns = [
    /href=["']([^"'{}]+)["']/g,
    /\bpath:\s*["']([^"']+)["']/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(content)) !== null) links.push(m[1]);
  }
  return links;
}

/** Keep only same-site internal navigations we can statically verify. */
function isCheckableInternal(link) {
  if (!link.startsWith("/")) return false; // external, mailto, tel, protocol-relative, anchors
  if (link.startsWith("//")) return false; // protocol-relative external
  return true;
}

/** Reduce a link to the route path: drop hash and query, resolve pure anchors to "/". */
function toRoutePath(link) {
  const withoutHash = link.split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  return withoutQuery === "" ? "/" : withoutQuery;
}

// Static assets served from /public are valid targets even without a route.
const PUBLIC_FILES = new Set(
  (() => {
    try {
      return walk(join(ROOT, "public"), [""]).map((f) =>
        "/" + relative(join(ROOT, "public"), f)
      );
    } catch {
      return [];
    }
  })()
);
// A handful of files live at the site root (e.g. favicon).
const ROOT_ASSETS = new Set(["/favicon.ico", "/favicon.png"]);

function isStaticAsset(pathname) {
  if (PUBLIC_FILES.has(pathname) || ROOT_ASSETS.has(pathname)) return true;
  // Anything with a file extension is treated as a static asset, not a route.
  return /\.[a-z0-9]+$/i.test(pathname);
}

test("every internal URL on the site points to a real route", () => {
  const routes = discoverRoutes();
  assert.ok(routes.size > 0, "expected to discover at least one route");

  const sourceFiles = walk(SRC_DIR, [".tsx", ".ts", ".jsx", ".js"]);
  const broken = [];

  for (const file of sourceFiles) {
    const content = readFileSync(file, "utf8");
    for (const link of extractInternalLinks(content)) {
      if (!isCheckableInternal(link)) continue;
      const pathname = toRoutePath(link);
      if (pathname === "/") continue; // home + on-page anchors
      if (isStaticAsset(pathname)) continue;
      if (!routeExists(pathname, routes)) {
        broken.push({ file: relative(ROOT, file), link });
      }
    }
  }

  const message =
    "Broken internal links (no matching route):\n" +
    broken.map((b) => `  ${b.link}  →  ${b.file}`).join("\n") +
    `\n\nKnown routes: ${[...routes].sort().join(", ")}`;

  assert.equal(broken.length, 0, message);
});
