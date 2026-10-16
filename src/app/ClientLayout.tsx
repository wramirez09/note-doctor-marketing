"use client";

import ApiBanner from "@/components/ApiBanner";
import PreLoader from "@/components/Common/PreLoader";
import Footer from "@/components/home/Footer";
import { HeaderWithMenu } from "@/components/HeaderWithMenu";
import ScrollToTop from "@/components/ScrollToTop";
import { createTheme, MantineProvider } from "@mantine/core";
import { MotionConfig } from "framer-motion";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // ThemeProvider wraps the preloader too, so its blocking script sets the
  // theme class before first paint instead of after the loader finishes.
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {/* "user" drops movement (keeps fades) when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
        {loading ? <PreLoader /> : <Site>{children}</Site>}
      </MotionConfig>
    </ThemeProvider>
  );
}

function Site({ children }: { children: React.ReactNode }) {
  const theme = createTheme({ fontFamily: '"Google Sans Flex", sans-serif' });
  const { resolvedTheme } = useTheme();

  return (
    // Mantine follows whichever theme next-themes resolved (System included).
    <MantineProvider theme={theme} forceColorScheme={resolvedTheme === "dark" ? "dark" : "light"}>
      <ApiBanner />
      <HeaderWithMenu />
      {/* Shifts page content down by the banner's height while it is showing. */}
      <div style={{ paddingTop: "var(--api-banner-h, 0px)" }}>{children}</div>
      <Footer />
      <ScrollToTop />
    </MantineProvider>
  );
}
