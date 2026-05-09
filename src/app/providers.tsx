"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";

const theme = createTheme({});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <MantineProvider theme={theme} forceColorScheme="dark">
        {children}
      </MantineProvider>
    </ThemeProvider>
  );
}
