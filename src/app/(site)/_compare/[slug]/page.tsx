// // Comparison pages are positioned to make the NoteDoctorAI advantage clear.
// // Every page closes with a "Where NoteDoctorAI wins" section that summarizes
// // why providers pick us over the listed alternative.
// 
// import type { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import { StructuredData } from "@/components/StructuredData";
// import { comparisons, getComparison } from "@/lib/compare";
// import { getCaseStudy } from "@/lib/case-studies";
// 
// const SITE_URL = "https://NoteDoctorAI";
// 
// type Params = { slug: string };
// 
// export function generateStaticParams(): Params[] {
//   return comparisons.map((c) => ({ slug: c.slug }));
// }
// 
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const cmp = getComparison(slug);
//   if (!cmp) return {};
//   const url = `/compare/${cmp.slug}`;
//   return {
//     title: { absolute: cmp.title },
//     description: cmp.description,
//     alternates: { canonical: url },
//     openGraph: {
//       type: "article",
//       url,
//       title: cmp.title,
//       description: cmp.description,
//       publishedTime: cmp.publishedAt,
//       modifiedTime: cmp.updatedAt,
//     },
//     twitter: { card: "summary_large_image", title: cmp.title, description: cmp.description },
//   };
// }
// 
// function paragraphs(body: string) {
//   return body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
// }
// 
// function WinnerChip({ winner }: { winner: "notedoctor" | "competitor" | "tie" | "depends" }) {
//   const label =
//     winner === "notedoctor"
//       ? "NoteDoctorAI"
//       : winner === "competitor"
//         ? "Competitor"
//         : winner === "tie"
//           ? "Tie"
//           : "Depends";
//   const color =
//     winner === "notedoctor"
//       ? "var(--blue-mid)"
//       : winner === "competitor"
//         ? "#f59e0b"
//         : "var(--muted)";
//   return (
//     <span
//       className="text-[11px] font-semibold uppercase tracking-[.1em] px-2 py-0.5 rounded-full border whitespace-nowrap"
//       style={{ color, borderColor: "var(--border)" }}
//     >
//       {label}
//     </span>
//   );
// }
// 
// export default async function ComparePage({
//   params,
// }: {
//   params: Promise<Params>;
// }) {
//   const { slug } = await params;
//   const cmp = getComparison(slug);
//   if (!cmp) notFound();
// 
//   const related = cmp.relatedCaseStudySlug ? getCaseStudy(cmp.relatedCaseStudySlug) : undefined;
//   const others = comparisons.filter((c) => c.slug !== cmp.slug);
// 
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: cmp.title,
//     description: cmp.description,
//     datePublished: cmp.publishedAt,
//     dateModified: cmp.updatedAt,
//     author: { "@type": "Organization", name: "NoteDoctorAI" },
//     publisher: { "@type": "Organization", name: "NoteDoctorAI" },
//     mainEntityOfPage: `${SITE_URL}/compare/${cmp.slug}`,
//   };
// 
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare/${cmp.slug}` },
//       { "@type": "ListItem", position: 3, name: `vs ${cmp.competitor}`, item: `${SITE_URL}/compare/${cmp.slug}` },
//     ],
//   };
// 
//   return (
//     <>
//       <StructuredData data={[articleSchema, breadcrumbSchema]} />
//       <Breadcrumb pageName={`vs ${cmp.competitor}`} />
//       <main className="px-6 py-16 max-w-[1080px] mx-auto">
//         {/* Hero */}
//         <header className="mb-12 max-w-[800px]">
//           <p
//             className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
//             style={{ color: "var(--blue-mid)" }}
//           >
//             Comparison · Updated {cmp.updatedAt}
//           </p>
//           <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
//             {cmp.title}
//           </h1>
//           <p className="text-[18px] leading-[1.65] mb-4" style={{ color: "var(--muted)" }}>
//             {cmp.description}
//           </p>
//           <p className="text-[15px] leading-[1.65]" style={{ color: "var(--muted)" }}>
//             <strong style={{ color: "var(--text)" }}>Shared audience:</strong>{" "}
//             {cmp.sharedAudience}
//           </p>
//         </header>
// 
//         {/* Best fit columns */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
//           <div
//             className="rounded-2xl border p-6"
//             style={{
//               borderColor: "var(--blue)",
//               background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
//             }}
//           >
//             <p
//               className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
//               style={{ color: "var(--blue-mid)" }}
//             >
//               Best fit for NoteDoctorAI
//             </p>
//             <p className="text-[15px] leading-[1.65]" style={{ color: "var(--text)" }}>
//               {cmp.bestFitFor.notedoctor}
//             </p>
//           </div>
//           <div
//             className="rounded-2xl border p-6"
//             style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
//           >
//             <p
//               className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
//               style={{ color: "var(--muted)" }}
//             >
//               Best fit for {cmp.competitor}
//             </p>
//             <p className="text-[15px] leading-[1.65]" style={{ color: "var(--text)" }}>
//               {cmp.bestFitFor.competitor}
//             </p>
//             <p className="text-[12px] mt-3" style={{ color: "var(--muted)" }}>
//               {cmp.competitorTagline}
//             </p>
//           </div>
//         </section>
// 
//         {/* Matrix */}
//         <section className="mb-14">
//           <h2 className="text-[24px] font-semibold mb-5 tracking-[-0.01em]">
//             Side by side
//           </h2>
// 
//           {/* Desktop / tablet — table */}
//           <div
//             className="hidden md:block rounded-2xl border overflow-hidden"
//             style={{ borderColor: "var(--border)" }}
//           >
//             <table className="w-full text-left text-[14px]">
//               <thead>
//                 <tr style={{ background: "var(--bg2)" }}>
//                   <th
//                     className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[.1em] w-[24%]"
//                     style={{ color: "var(--muted)" }}
//                   >
//                     Dimension
//                   </th>
//                   <th
//                     className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[.1em] w-[33%]"
//                     style={{ color: "var(--blue-mid)" }}
//                   >
//                     NoteDoctorAI
//                   </th>
//                   <th
//                     className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[.1em] w-[33%]"
//                     style={{ color: "var(--muted)" }}
//                   >
//                     {cmp.competitor}
//                   </th>
//                   <th
//                     className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[.1em] w-[10%]"
//                     style={{ color: "var(--muted)" }}
//                   >
//                     Verdict
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cmp.matrix.map((row, i) => (
//                   <tr
//                     key={row.dimension}
//                     className="border-t align-top"
//                     style={{ borderColor: "var(--border)" }}
//                   >
//                     <td className="px-5 py-4 font-semibold" style={{ color: "var(--text)" }}>
//                       {row.dimension}
//                     </td>
//                     <td className="px-5 py-4" style={{ color: "var(--muted)" }}>
//                       {row.notedoctor}
//                     </td>
//                     <td className="px-5 py-4" style={{ color: "var(--muted)" }}>
//                       {row.competitor}
//                       {row.note && (
//                         <p
//                           className="text-[12px] mt-2"
//                           style={{ color: "var(--faint)" }}
//                         >
//                           {row.note}
//                         </p>
//                       )}
//                     </td>
//                     <td className="px-5 py-4">
//                       <WinnerChip winner={row.winner} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
// 
//           {/* Mobile — card stack */}
//           <div className="md:hidden space-y-4">
//             {cmp.matrix.map((row) => (
//               <div
//                 key={row.dimension}
//                 className="rounded-xl border p-5"
//                 style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
//               >
//                 <div className="flex items-start justify-between gap-3 mb-4">
//                   <h3 className="text-[15px] font-semibold">{row.dimension}</h3>
//                   <WinnerChip winner={row.winner} />
//                 </div>
//                 <div className="space-y-3 text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
//                   <div>
//                     <p
//                       className="text-[11px] font-semibold uppercase tracking-[.1em] mb-1"
//                       style={{ color: "var(--blue-mid)" }}
//                     >
//                       NoteDoctorAI
//                     </p>
//                     <p>{row.notedoctor}</p>
//                   </div>
//                   <div>
//                     <p
//                       className="text-[11px] font-semibold uppercase tracking-[.1em] mb-1"
//                       style={{ color: "var(--muted)" }}
//                     >
//                       {cmp.competitor}
//                     </p>
//                     <p>{row.competitor}</p>
//                     {row.note && (
//                       <p className="text-[12px] mt-1" style={{ color: "var(--faint)" }}>
//                         {row.note}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
// 
//         {/* Where they win */}
//         <section
//           className="rounded-2xl border p-7 mb-14"
//           style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
//         >
//           <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">
//             Where NoteDoctorAI wins
//           </h2>
//           <div
//             className="space-y-4 text-[15px] leading-[1.7]"
//             style={{ color: "var(--muted)" }}
//           >
//             {paragraphs(cmp.fairnessNote).map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}
//           </div>
//         </section>
// 
//         {/* Summary */}
//         <section className="mb-14">
//           <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">
//             When to pick which
//           </h2>
//           <p className="text-[16px] leading-[1.7]" style={{ color: "var(--muted)" }}>
//             {cmp.summary}
//           </p>
//         </section>
// 
//         {/* CTAs */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
//           <div
//             className="rounded-2xl border p-6"
//             style={{
//               borderColor: "var(--blue)",
//               background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
//             }}
//           >
//             <h3 className="text-[18px] font-semibold mb-2">
//               Run NoteDoctorAI on your prior auths.
//             </h3>
//             <p
//               className="text-[14px] leading-[1.6] mb-5"
//               style={{ color: "var(--muted)" }}
//             >
//               Bring a denial. We&apos;ll show you how risk gets flagged before submission.
//             </p>
//             <Link
//               href={`/request-demo?source=compare&slug=${cmp.slug}`}
//               className="inline-block text-white text-[14px] font-semibold px-6 py-2.5 rounded-[9px] transition-all hover:-translate-y-0.5"
//               style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
//             >
//               Book a 20-min demo
//             </Link>
//           </div>
//           {related && (
//             <Link
//               href={`/case-studies/${related.slug}`}
//               className="rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
//               style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
//             >
//               <p
//                 className="text-[11px] font-semibold uppercase tracking-[.12em] mb-2"
//                 style={{ color: "var(--blue-mid)" }}
//               >
//                 Related case study
//               </p>
//               <h3 className="text-[18px] font-semibold mb-2 leading-[1.3]">
//                 {related.headline}
//               </h3>
//               <p
//                 className="text-[14px] leading-[1.6] mb-3"
//                 style={{ color: "var(--muted)" }}
//               >
//                 {related.subhead}
//               </p>
//               <span
//                 className="text-[13px] font-semibold"
//                 style={{ color: "var(--blue-mid)" }}
//               >
//                 Read the case study →
//               </span>
//             </Link>
//           )}
//         </section>
// 
//         {/* Other comparisons */}
//         {others.length > 0 && (
//           <section
//             className="border-t pt-10"
//             style={{ borderColor: "var(--border)" }}
//           >
//             <p
//               className="text-[11px] font-semibold uppercase tracking-[.12em] mb-4"
//               style={{ color: "var(--muted)" }}
//             >
//               Other comparisons
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {others.map((o) => (
//                 <Link
//                   key={o.slug}
//                   href={`/compare/${o.slug}`}
//                   className="rounded-xl border px-5 py-4 transition-colors hover:border-[#3b82f6]"
//                   style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
//                 >
//                   <p
//                     className="text-[15px] font-semibold mb-1"
//                     style={{ color: "var(--text)" }}
//                   >
//                     NoteDoctorAI vs {o.competitor}
//                   </p>
//                   <p className="text-[13px]" style={{ color: "var(--muted)" }}>
//                     {o.competitorTagline}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </main>
//     </>
//   );
// }
