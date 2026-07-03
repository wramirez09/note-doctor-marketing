import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Metadata } from "next";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

// Google Analytics 4 — NoteDoctor.AI_Marketing account/property (G-XR7VW0E6ZF).
// Loaded only in production so local dev doesn't pollute the property.
const GA_MEASUREMENT_ID = "G-XR7VW0E6ZF";
const isProduction = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
  description:
    "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
  openGraph: {
    type: "website",
    url: "https://NoteDoctor.AI/",
    title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
    description:
      "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
    images: [{ url: "https://NoteDoctor.AI/images/logo/nd_logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteDoctor.AI | AI-Powered Prior Authorization Screening",
    description:
      "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.",
    images: ["https://NoteDoctor.AI/images/logo/nd_logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth !scroll-pt-24" lang="en">
      <head>
        <ColorSchemeScript />
        {isProduction && (
          <>
            {/* Google tag (gtag.js) */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
