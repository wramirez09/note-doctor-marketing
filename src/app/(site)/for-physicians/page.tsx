import type { Metadata } from "next";
import PhysiciansPage from ".";

const TITLE = "AI Clinical Insight Tools for Physicians";
const DESCRIPTION =
  "Equip your practice with NoteDoctor.AI — analyze patient notes, surface research-based insights, and streamline diagnostic workflows. Trusted, secure, physician-focused AI support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/for-physicians" },
  openGraph: { type: "website", url: "/for-physicians", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function PhysiciansPageWrapper() {
  return <PhysiciansPage />;
}
