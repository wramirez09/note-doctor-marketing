"use client";

import PreLoader from "@/components/Common/PreLoader";
import Footer from "@/components/Footer";
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
      <MantineProvider theme={theme}>
        <HeaderWithMenu />
        {children}
        <Footer />
        <ScrollToTop />
      </MantineProvider>
    </ThemeProvider>
  );
}
