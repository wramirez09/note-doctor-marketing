"use client";

import {
  Box,
  Burger,
  Button,
  Container,
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
      <Container>
        <header className={headerClasses}>
          <div className="container px-6 md:px-12">
            <div className="relative -mx-4 mb-6 flex items-center justify-between">
              <Group justify="space-between" h="100%" className="w-full">
                <div
                  className="w-60 max-w-full px-4"
                  onClick={() => router.push("/")}
                >
                  <div
                    className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
                  >
                    <Image
                      src={`/images/logo/nd-ai-logo.svg`}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo w-1/3 dark:hidden"
                    />
                    <Image
                      src={`/images/logo/nd-ai-logo.svg`}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-1/3 dark:block"
                    />
                  </div>
                </div>

                <Group h="100%" gap={0} visibleFrom="md">
                  <div
                    className={`${classes.link} ${isActiveLink("/") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/")}
                  >
                    Home
                  </div>
                  <div
                    className={`${classes.link} ${isActiveLink("/how-it-works") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/how-it-works")}
                  >
                    How It Works
                  </div>
                  <div
                    className={`${classes.link} ${isActiveLink("/about") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/about")}
                  >
                    About Us
                  </div>
                  <div
                    className={`${classes.link} ${isActiveLink("/contact") ? classes.activeLink : ""}`}
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                  </div>
                </Group>

                <Group visibleFrom="md">
                  <Button
                    target="_blank"
                    className="button-light"
                    component="a"
                    href="https://login.microsoftonline.com/5ca01929-328f-421e-99f8-51430e1e6eb5/oauth2/v2.0/authorize?response_type=code+id_token&redirect_uri=https%3A%2F%2Fhealthapp0.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=1081de41-c6fa-4089-9725-8f927bba46d3&scope=openid+profile+email&response_mode=form_post&nonce=2aec1ade30c8491291e984738ea5e64f_20241031235734&state="
                  >
                    Log in
                  </Button>
                  <Button
                    className="button-primary"
                    component="a"
                    href="/contact/"
                  >
                    Sign up
                  </Button>
                </Group>

                <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  hiddenFrom="md"
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
          padding="md"
          hiddenFrom="sm"
          zIndex={1000000}
          classNames={{
            body: classes.drawerBody,
            header: classes.drawerHeader,
          }}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

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
              className={`${classes.link} ${isActiveLink("/how-it-works") ? classes.activeLink : ""}`}
              onClick={() => {
                router.push("/how-it-works");
                closeDrawer();
              }}
            >
              How It Works
            </div>
            <div
              className={`${classes.link} ${isActiveLink("/about") ? classes.activeLink : ""}`}
              onClick={() => {
                router.push("/about");
                closeDrawer();
              }}
            >
              About Us
            </div>
            <div
              className={`${classes.link} ${isActiveLink("/contact") ? classes.activeLink : ""}`}
              onClick={() => {
                router.push("/contact");
                closeDrawer();
              }}
            >
              Contact Us
            </div>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md" mt="xl">
              <Button
                className="button-light"
                component="a"
                href="https://login.microsoftonline.com/5ca01929-328f-421e-99f8-51430e1e6eb5/oauth2/v2.0/authorize?response_type=code+id_token&redirect_uri=https%3A%2F%2Fhealthapp0.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=1081de41-c6fa-4089-9725-8f927bba46d3&scope=openid+profile+email&response_mode=form_post&nonce=2aec1ade30c8491291e984738ea5e64f_20241031235734&state="
              >
                Log in
              </Button>
              <Button
                className="button-primary"
                component="a"
                href="/contact/#contact"
              >
                Sign up
              </Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Container>
    </Box>
  );
}
