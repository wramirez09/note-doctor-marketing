import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `/case-studies/${study.slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: study.title, description: study.summary },
    twitter: { card: "summary_large_image", title: study.title, description: study.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Breadcrumb pageName={study.customer} />
      <main className="px-6 py-20 max-w-[820px] mx-auto">
        <p
          className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
          style={{ color: "var(--blue-mid)" }}
        >
          {study.customer}
        </p>
        <h1 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-6">
          {study.title}
        </h1>
        {/* TODO(seo-fix): replace with full customer narrative, metrics, and quote block. */}
        <p className="text-[17px] leading-[1.7]" style={{ color: "var(--muted)" }}>
          {study.summary}
        </p>
        <p className="text-[15px] leading-[1.7] mt-8" style={{ color: "var(--muted)" }}>
          {study.body}
        </p>
      </main>
    </>
  );
}
