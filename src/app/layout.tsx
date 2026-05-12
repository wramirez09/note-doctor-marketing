import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Metadata } from "next";
import Script from "next/script";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Footer from "@/components/home/Footer";
import { HeaderWithMenu } from "@/components/HeaderWithMenu";
import ScrollToTop from "@/components/ScrollToTop";
import { StructuredData } from "@/components/StructuredData";
import Providers from "./providers";

const GA_MEASUREMENT_ID = "G-MD0NMEFZQR";

const SITE_URL = "https://NoteDoctorAI";
const SITE_NAME = "NoteDoctorAI";
const DEFAULT_TITLE = "NoteDoctorAI — AI-Powered Prior Authorization Screening";
const DEFAULT_DESCRIPTION =
  "Cut prior-auth turnaround from days to minutes. NoteDoctorAI flags denial risk before submission, built for medical practices. HIPAA-compliant.";
const OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — NoteDoctorAI",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/nd_logo.svg`,
  sameAs: [] as string[],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "USD",
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
        <StructuredData data={[organizationSchema, softwareApplicationSchema]} />
      </head>
      <body>
        <Providers>
          <HeaderWithMenu />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
