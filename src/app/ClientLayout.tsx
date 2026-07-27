"use client";

import ApiBanner from "@/components/ApiBanner";
import PreLoader from "@/components/Common/PreLoader";
import Footer from "@/components/home/Footer";
import { HeaderWithMenu } from "@/components/HeaderWithMenu";
import ScrollToTop from "@/components/ScrollToTop";
import { createTheme, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <MantineProvider theme={theme} forceColorScheme="dark">
        <ApiBanner />
        <HeaderWithMenu />
        {/* Shifts page content down by the banner's height while it is showing. */}
        <div style={{ paddingTop: "var(--api-banner-h, 0px)" }}>{children}</div>
        <Footer />
        <ScrollToTop />
      </MantineProvider>
    </ThemeProvider>
  );
}
