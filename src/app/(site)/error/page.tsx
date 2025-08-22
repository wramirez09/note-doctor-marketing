import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   openGraph: {
//     type: "website",
//     url: "https://notedoctor.ai/error",
//     title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
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
//     title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     images: ["https://notedoctor.ai/opengraph-image.jpg"],
//   },
// };
export const runtime = "edge";
export const dynamic = "force-dynamic";
const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
