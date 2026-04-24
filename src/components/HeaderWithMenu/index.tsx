"use client";

import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import classes from "./index.module.css";

export function HeaderWithMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathUrl = usePathname();
  const router = useRouter();

  const isActiveLink = (path: string) => pathUrl === path;

  return (
    <Box>
      <header className="ud-header fixed left-0 top-0 z-[999] flex w-full items-center bg-[#050508] border-b border-white/10">
        <div className="container px-6 lg:px-12">
          <div className="container relative flex items-center max-sm:p-0">
            <Group
              justify="space-between"
              h="100%"
              className={`${classes.group} w-full`}
            >
              {/* Logo + brand name */}
              <div
                className="flex items-center gap-2 cursor-pointer py-4"
                onClick={() => router.push("/")}
              >
                <Image
                  src="/images/logo/nd_logo.svg"
                  alt="logo"
                  width={35}
                  height={35}
                  className="header-logo"
                />
                <span className="text-white text-sm font-semibold tracking-tight">
                  NoteDoctor.Ai
                </span>
              </div>

              {/* Centered nav links */}
              <Group
                h="100%"
                gap={0}
                visibleFrom="lg"
                className="absolute left-1/2 -translate-x-1/2"
              >
                <div
                  className={`${classes.link} ${isActiveLink("/") ? classes.activeLink : ""}`}
                  onClick={() => router.push("/")}
                >
                  Home
                </div>
                <div
                  className={`${classes.link} ${isActiveLink("/for-you") ? classes.activeLink : ""}`}
                  onClick={() => router.push("/for-you")}
                >
                  For You
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

              {/* Right side */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <a
                    href="https://app.NoteDoctor.Ai"
                    className="text-white text-[13px] font-semibold px-6 py-1.5 rounded-[9px] transition-all hover:-translate-y-0.5 inline-block"
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
              </div>
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
            className={`${classes.link} ${isActiveLink("/for-you") ? classes.activeLink : ""}`}
            onClick={() => {
              router.push("/for-you");
              closeDrawer();
            }}
          >
            For You
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
              href="https://app.NoteDoctor.Ai"
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
