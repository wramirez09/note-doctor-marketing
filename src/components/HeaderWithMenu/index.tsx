"use client";

import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classNames from "classnames";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./index.module.css";

export function HeaderWithMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [sticky, setSticky] = useState(false);
  const theme = useMantineTheme();
  const pathUrl = usePathname();
  const router = useRouter();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const headerClasses = classNames(
    "ud-header left-0 top-0 z-40 flex w-full items-center",
    {
      "shadow-nav fixed z-[999]  bg-white/80 backdrop-blur-[5px]  dark:bg-dark/10":
        sticky,
      "absolute bg-transparent": !sticky,
    },
  );

  const isActiveLink = (path: string) => pathUrl === path;

  return (
    <Box>
      <header className={headerClasses}>
        <div className="container px-6 lg:px-12">
          <div className="container relative mb-6 flex items-center justify-between max-sm:p-0">
            <Group
              justify="space-between"
              h="100%"
              className={`${classes.group} w-full`}
            >
              <Group h="100%" gap={0} align="center">
                <div onClick={() => router.push("/")}>
                  <div
                    className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
                  >
                    <Image
                      src={`/images/logo/nd_logo.svg`}
                      alt="logo"
                      width={35}
                      height={35}
                      className="header-logo dark:hidden"
                    />
                    <Image
                      src={`/images/logo/nd_logo.svg`}
                      alt="logo"
                      width={35}
                      height={35}
                      className="header-logo hidden dark:block"
                    />
                  </div>
                </div>

                <Group h="100%" gap={0} visibleFrom="lg">
                  <div
                    className={`${classes.link} ${isActiveLink("/") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/")}
                  >
                    Home
                  </div>
                  <div
                    className={`${classes.link} ${isActiveLink("/pricing") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/pricing")}
                  >
                    Pricing
                  </div>
                  <div
                    className={`${classes.link}`}
                    onClick={() => router.push("/#contact")}
                  >
                    Contact Us
                  </div>
                </Group>
              </Group>

              <div className="hidden lg:block">
                <a
                  href="https://app.notedoctor.ai"
                  className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5 inline-block"
                  style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
                >
                  Subscribe
                </a>
              </div>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                hiddenFrom="lg"
                color="white"
              />
            </Group>
          </div>
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="lg"
        hiddenFrom="lg"
        zIndex={1000000}
        classNames={{
          body: classes.drawerBody,
          header: classes.drawerHeader,
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-lg">
          <Divider my="lg" />

          <div
            className={`${classes.link} ${isActiveLink("/") ? classes.activeLink : ""}`}
            onClick={() => {
              router.push("/");
              closeDrawer();
            }}
          >
            Home
          </div>
          <div
            className={`${classes.link} ${isActiveLink("/pricing") ? classes.activeLink : ""}`}
            onClick={() => {
              router.push("/pricing");
              closeDrawer();
            }}
          >
            Pricing
          </div>
          <div
            className={`${classes.link}`}
            onClick={() => {
              router.push("/#contact");
              closeDrawer();
            }}
          >
            Contact Us
          </div>

          <Divider my="lg" />

          <Group justify="center" pb="xl" px="lg">
            <a
              href="https://app.notedoctor.ai"
              className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5 inline-block"
              style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
            >
              Subscribe
            </a>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
