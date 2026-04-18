"use client";

import PreLoader from "@/components/Common/PreLoader";
import Footer from "@/components/Footer";
import { HeaderWithMenu } from "@/components/HeaderWithMenu";
import ScrollToTop from "@/components/ScrollToTop";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        <ColorSchemeScript />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NoteDoctor.AI | AI-Powered Prior Authorization Screening" />
        <meta property="og:description" content="NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays." />
        <meta property="og:image" content="https://notedoctor.ai/images/logo/nd-ai-logo.svg" />
        <meta property="og:url" content="https://notedoctor.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NoteDoctor.AI | AI-Powered Prior Authorization Screening" />
        <meta name="twitter:description" content="NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays." />
        <meta name="twitter:image" content="https://notedoctor.ai/images/logo/nd-ai-logo.svg" />
        <meta name="twitter:url" content="https://notedoctor.ai/" />
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <MantineProvider theme={theme}>
              <HeaderWithMenu />
              {children}
              <Footer />
              <ScrollToTop />
            </MantineProvider>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
