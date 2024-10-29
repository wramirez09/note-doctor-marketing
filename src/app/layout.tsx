"use client";

import PreLoader from "@/components/Common/PreLoader";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";

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
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="dark"
            >
              <MantineProvider theme={theme}>
                {/* <ToasterContext /> */}
                {/* <Header /> */}

                <ToasterContext />
                <Header />
                {/* <HeaderWithMenu /> */}
                {/* <NavbarMenuComp /> */}
                {children}
                {/* <Footer /> */}
                <ScrollToTop />
              </MantineProvider>
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
