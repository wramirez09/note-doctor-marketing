import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   openGraph: {
//     type: "website",
//     url: "https://NoteDoctor.Ai/error",
//     title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     images: [
//       {
//         url: "https://NoteDoctor.Ai/opengraph-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     description: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//     images: ["https://NoteDoctor.Ai/opengraph-image.jpg"],
//   },
// };
const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
