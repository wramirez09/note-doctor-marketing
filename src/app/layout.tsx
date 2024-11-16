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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta property="og:NoteDoctorAi" content="NoteDoctorAI" />
      <meta
        property="og:Meet NoteDoctorAI: Revolutionizing healthcare with AI-driven medical coding solutions. Boost accuracy, streamline efficiency, and drive profitability for healthcare organizations across the globe."
        content="A brief summary of my page"
      />
      <meta property="og:image" content="opengraph-image.jpg" />
      <meta property="og:url" content="https://notedoctor.ai/" />

      <meta property="twitter:NoteDoctorAi" content="NoteDoctorAI" />
      <meta
        property="twitter:Meet NoteDoctorAI: Revolutionizing healthcare with AI-driven medical coding solutions. Boost accuracy, streamline efficiency, and drive profitability for healthcare organizations across the globe."
        content="A brief summary of my page"
      />
      <meta property="twitter:image" content="opengraph-image.jpg" />
      <meta property="twitter:url" content="https://notedoctor.ai/" />
      <head>
        <ColorSchemeScript />
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
