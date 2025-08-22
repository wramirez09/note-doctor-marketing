import { Metadata } from "next";
import SecurityPage from ".";

// export const metadata: Metadata = {
//   title: "Security Page | Get in Touch for AI-Powered Healthcare Solutions",
//   description: "Security | At NoteDoctorAI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.",
//   openGraph: {
//     type: "website",
//     url: "https://notedoctor.ai/security",
//     title: "Security Page | Get in Touch for AI-Powered Healthcare Solutions",
//   description: "security | At NoteDoctorAI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.",
//     images: [
//       {
//         url: "https://notedoctor.ai/opengraph-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: "Security Page | Get in Touch for AI-Powered Healthcare Solutions",
//   description: "security | At NoteDoctorAI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.",
//     images:['https://notedoctor.ai/opengraph-image.jpg'],
//   }
// };
export const dynamic = "force-dynamic";
const SecurityPageWrapper = () => {
  return <SecurityPage />;
};

export default SecurityPageWrapper;
