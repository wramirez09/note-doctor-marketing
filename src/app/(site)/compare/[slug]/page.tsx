import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { comparisons, getComparison } from "@/lib/compare";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cmp = getComparison(slug);
  if (!cmp) return {};
  const url = `/compare/${cmp.slug}`;
  return {
    title: cmp.title,
    description: cmp.description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: cmp.title, description: cmp.description },
    twitter: { card: "summary_large_image", title: cmp.title, description: cmp.description },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cmp = getComparison(slug);
  if (!cmp) notFound();

  return (
    <>
      <Breadcrumb pageName={`vs ${cmp.competitor}`} />
      <main className="px-6 py-20 max-w-[820px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          {cmp.title}
        </h1>
        {/* TODO(seo-fix): replace with verified, dated comparison table sourced from current product docs. */}
        <p className="text-[17px] leading-[1.7] mb-10" style={{ color: "var(--muted)" }}>
          {cmp.description}
        </p>
        <ul className="space-y-4">
          {cmp.bullets.map((b) => (
            <li
              key={b}
              className="rounded-xl border px-5 py-4 text-[15px] leading-[1.6]"
              style={{ borderColor: "var(--border)", background: "var(--bg2)", color: "var(--text)" }}
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[15px]" style={{ color: "var(--muted)" }}>
          Want a side-by-side run on your own prior auths?{" "}
          <a href="/request-demo" className="underline" style={{ color: "var(--blue-mid)" }}>
            Request a demo
          </a>
          .
        </p>
      </main>
    </>
  );
}
