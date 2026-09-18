"use client";

import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { DEVELOPERS_URL, MCP_GUIDE_URL } from "@/config/apiLaunch";
import classes from "./index.module.css";

/**
 * The two developer surfaces. Both live under /developers, so the parent is a
 * menu rather than a link — there is no "/developers overview" worth a third
 * entry, and sending the parent somewhere the children don't cover would make
 * the third click a surprise.
 */
const DEVELOPER_LINKS = [
  {
    href: DEVELOPERS_URL,
    label: "API",
    body: "REST endpoints, keys and scopes",
  },
  {
    href: MCP_GUIDE_URL,
    label: "MCP",
    body: "Connect Claude, Cursor or any MCP client",
  },
];

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3 ml-1.5 shrink-0"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function HeaderWithMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathUrl = usePathname();
  const router = useRouter();

  const isActiveLink = (path: string) => pathUrl === path;
  // Either developer page lights the parent up.
  const isDeveloperSection = pathUrl?.startsWith(DEVELOPERS_URL) ?? false;

  return (
    <Box>
      {/* top offset tracks the sitewide ApiBanner, which sits above the header */}
      <header
        className="ud-header fixed left-0 z-[999] flex w-full items-center bg-[#050508] border-b border-white/10 lg:top-12"
      >
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
                  NoteDoctor.AI
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
                <Menu
                  trigger="click-hover"
                  openDelay={80}
                  closeDelay={160}
                  position="bottom"
                  offset={0}
                  withinPortal
                  radius="md"
                  styles={{
                    dropdown: {
                      background: "#0b1020",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: 6,
                    },
                  }}
                >
                  <Menu.Target>
                    <div
                      className={`${classes.link} ${isDeveloperSection ? classes.activeLink : ""}`}
                    >
                      Developers
                      <ChevronIcon />
                    </div>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {DEVELOPER_LINKS.map((item) => (
                      <Menu.Item
                        key={item.href}
                        onClick={() => router.push(item.href)}
                        styles={{
                          item: {
                            background: isActiveLink(item.href)
                              ? "rgba(59,130,246,0.14)"
                              : "transparent",
                          },
                        }}
                      >
                        <div className="text-[13.5px] font-semibold text-white">{item.label}</div>
                        <div className="text-[12px] mt-0.5 text-white/55">{item.body}</div>
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
                <div
                  className={`${classes.link}`}
                  onClick={() => router.push("/#contact")}
                >
                  Contact Us
                </div>
              </Group>

              {/* Right side */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-3">
                  <a
                    href="https://app.NoteDoctor.AI/auth/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 text-[13px] font-semibold px-6 py-1.5 rounded-[9px] transition-all hover:-translate-y-0.5 inline-block"
                  >
                    Login
                  </a>
                  <a
                    href="https://app.NoteDoctor.AI/auth/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
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
          {/* No dropdown in the drawer: there is room to just show both, and a
              tap-to-expand would hide the MCP page behind an extra tap. */}
          <div
            className={`${classes.link} ${isDeveloperSection ? classes.activeLink : ""} !pb-1 !cursor-default`}
          >
            Developers
          </div>
          {DEVELOPER_LINKS.map((item) => (
            <div
              key={item.href}
              className={`${classes.link} ${isActiveLink(item.href) ? classes.activeLink : ""} !pl-8 !py-2 !text-[13px]`}
              onClick={() => {
                router.push(item.href);
                closeDrawer();
              }}
            >
              {item.label}
            </div>
          ))}
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
              href="https://app.NoteDoctor.AI/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5 inline-block"
            >
              Login
            </a>
            <a
              href="https://app.NoteDoctor.AI/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
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
