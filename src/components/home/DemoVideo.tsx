"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type DemoVideoProps = {
  publicId: string;
  cloudName: string;
};

declare global {
  interface Window {
    cloudinary?: {
      videoPlayer: (
        el: HTMLVideoElement | string,
        opts: Record<string, unknown>,
      ) => { dispose?: () => void };
    };
  }
}

export default function DemoVideo({ publicId, cloudName }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<{ dispose?: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !videoRef.current || !window.cloudinary) return;
      playerRef.current = window.cloudinary.videoPlayer(videoRef.current, {
        cloud_name: cloudName,
        publicId,
        autoplayMode: "on-scroll",
        muted: true,
        showJumpControls: true,
        pictureInPictureToggle: true,
        fluid: true,
        aiHighlightsGraph: true,
        hdr: true,
        controls: true,
        title: "NoteDoctor.AI",
        posterOptions: {
          url: `https://res.cloudinary.com/${cloudName}/video/upload/f_jpg,so_25p/${publicId}`,
        },
      });
    };

    const interval = window.setInterval(() => {
      if (window.cloudinary) {
        window.clearInterval(interval);
        init();
      }
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      playerRef.current?.dispose?.();
    };
  }, [publicId, cloudName]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/cloudinary-video-player@2/dist/cld-video-player.min.css"
      />
      <Script
        src="https://unpkg.com/cloudinary-video-player@2/dist/cld-video-player.min.js"
        strategy="afterInteractive"
      />

      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 mb-6 border"
            style={{
              color: "var(--blue-mid)",
              background: "var(--blue-dim)",
              borderColor: "rgba(59,130,246,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }}
            />
            Product Demo
          </div>

          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-4">
            See NoteDoctor{" "}
            <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
              in action
            </span>
          </h2>
          <p
            className="text-[16px] leading-[1.65] max-w-[560px] mx-auto mb-6"
            style={{ color: "var(--muted)" }}
          >
            Watch a prior authorization get drafted in under two minutes — the same workflow saving physicians hours every week.
          </p>

          <div
            className="relative mx-auto rounded-2xl overflow-hidden border"
            style={{
              maxWidth: "960px",
              borderColor: "var(--border)",
              background: "var(--bg-card)",
              boxShadow: "0 0 60px rgba(59,130,246,0.15)",
            }}
          >
            <video
              ref={videoRef}
              className="cld-video-player cld-fluid"
              playsInline
            />
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--blue)",
                boxShadow: "0 0 32px rgba(59,130,246,0.35)",
              }}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
