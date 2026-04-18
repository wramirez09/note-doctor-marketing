import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Metadata } from "next";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
  description:
    "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/",
    title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
    description:
      "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
    images: [{ url: "https://notedoctor.ai/images/logo/nd_logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
    description:
      "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
    images: ["https://notedoctor.ai/images/logo/nd_logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
