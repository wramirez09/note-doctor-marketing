import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "This is pricing page description",
//   openGraph: {
//     type: "website",
//     url: "https://notedoctor.ai/pricing",
//     title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "This is pricing page description",
//     images: [
//       {
//         url: "https://notedoctor.ai/opengraph-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "This is pricing page description",
//     images: ["https://notedoctor.ai/opengraph-image.jpg"],
//   },
// };
export const runtime = "edge";
export const dynamic = "force-dynamic";
const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
