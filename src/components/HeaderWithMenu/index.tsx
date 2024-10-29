"use client"

import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classNames from 'classnames';
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import classes from './index.module.css';

export function HeaderWithMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
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
      "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10": sticky,
      "absolute bg-transparent": !sticky,
    }
  );

  const isActiveLink = (path: string) => pathUrl === path;

  return (
    <Box>
      <header className={headerClasses}>
        <div className="container md:px-12">
          <div className="relative -mx-4 flex items-center justify-between">
            <Group justify="space-between" h="100%" className='w-full'>
              <div className="w-60 max-w-full px-4" onClick={() => router.push("/")}>
                <div className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}>
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
                  className={`${classes.link} ${isActiveLink('/') ? classes.activeLink : ''}`}
                  onClick={() => router.push("/")}
                >
                  Home
                </div>
                <div
                  className={`${classes.link} ${isActiveLink('/how-it-works') ? classes.activeLink : ''}`}
                  onClick={() => router.push("/how-it-works")}
                >
                  How It Works
                </div>
                <div
                  className={`${classes.link} ${isActiveLink('/about') ? classes.activeLink : ''}`}
                  onClick={() => router.push("/about")}
                >
                  About Us
                </div>
                <div
                  className={`${classes.link} ${isActiveLink('/contact') ? classes.activeLink : ''}`}
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </div>
              </Group>

              <Group visibleFrom="md">
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </Group>

              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" color="white" />
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
          header: classes.drawerHeader
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <div
            className={`${classes.link} ${isActiveLink('/') ? classes.activeLink : ''}`}
            onClick={() => {
              router.push("/");
              closeDrawer();
            }}
          >
            Home
          </div>
          <div
            className={`${classes.link} ${isActiveLink('/how-it-works') ? classes.activeLink : ''}`}
            onClick={() => {
              router.push("/how-it-works");
              closeDrawer();
            }}
          >
            How It Works
          </div>
          <div
            className={`${classes.link} ${isActiveLink('/about') ? classes.activeLink : ''}`}
            onClick={() => {
              router.push("/about");
              closeDrawer();
            }}
          >
            About Us
          </div>
          <div
            className={`${classes.link} ${isActiveLink('/contact') ? classes.activeLink : ''}`}
            onClick={() => {
              router.push("/contact");
              closeDrawer();
            }}
          >
            Contact Us
          </div>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
