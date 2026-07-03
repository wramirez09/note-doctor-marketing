import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const APP = join(SRC, "app");

/** Strip JS/JSX comments so links inside commented-out code aren't treated as live. */
function stripComments(src) {
  return src
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "") // {/* ... */} JSX comments
    .replace(/\/\*[\s\S]*?\*\//g, "") // /* ... */ block comments
    .replace(/(^|[^:])\/\/[^\n]*/g, "$1"); // // line comments (avoid http://)
}

/** Resolve an import specifier to a file on disk, or null for node_modules. */
function resolveImport(fromFile, spec) {
  let base;
  if (spec.startsWith("@/")) base = join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(fromFile), spec);
  else return null;
  const cands = [
    base + ".tsx", base + ".ts", base + ".jsx", base + ".js",
    join(base, "index.tsx"), join(base, "index.ts"),
    join(base, "index.jsx"), join(base, "index.js"),
  ];
  return cands.find(existsSync) || null;
}

/** Transitively collect every source file reachable from `entry` via imports. */
function collectTree(entry, seen = new Set()) {
  if (seen.has(entry)) return seen;
  seen.add(entry);
  const src = readFileSync(entry, "utf8");
  const re = /import\s+(?:[^"']*?from\s+)?["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const r = resolveImport(entry, m[1]);
    if (r) collectTree(r, seen);
  }
  return seen;
}

function anchorHashes(src) {
  const out = [];
  const re = /href=["']([^"']*)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const hash = m[1].split("#")[1];
    // Skip placeholders: href="#", href="/#" (empty hash) — they are no-op/scroll-top.
    if (hash) out.push({ href: m[1], hash });
  }
  return out;
}

function elementIds(src) {
  const out = new Set();
  const re = /\bid=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return out;
}

function findPages(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) findPages(f, out);
    else if (e === "page.tsx") out.push(f);
  }
  return out;
}

function routeOf(page) {
  return (
    "/" +
    relative(APP, page)
      .replace(/\/page\.tsx$/, "")
      .split("/")
      .filter((s) => !/^\(.*\)$/.test(s))
      .join("/")
  );
}

test("every on-page jump link resolves to a section id on the same page", () => {
  const pages = findPages(APP);
  assert.ok(pages.length > 0, "expected to find page.tsx files");

  const broken = [];
  for (const page of pages) {
    const tree = collectTree(page);
    const ids = new Set();
    const anchors = [];
    for (const file of tree) {
      const src = stripComments(readFileSync(file, "utf8"));
      elementIds(src).forEach((id) => ids.add(id));
      anchorHashes(src).forEach((a) => anchors.push({ ...a, file }));
    }
    for (const a of anchors) {
      if (!ids.has(a.hash)) {
        broken.push(
          `  [${routeOf(page)}] ${a.href}  →  #${a.hash} not found  (${relative(ROOT, a.file)})`
        );
      }
    }
  }

  assert.equal(
    broken.length,
    0,
    "Jump links with no matching section id on the target page:\n" +
      [...new Set(broken)].join("\n")
  );
});
