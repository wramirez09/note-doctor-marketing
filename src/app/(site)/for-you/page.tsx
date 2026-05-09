import type { Metadata } from "next";
import ForYouClient from "./ForYouClient";

const TITLE = "For You — Solutions by Role";
const DESCRIPTION =
  "Whether you're a physician, practice administrator, or health system leader, NoteDoctor.AI eliminates prior authorization friction for every role in healthcare.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/for-you" },
  openGraph: {
    type: "website",
    url: "/for-you",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ForYouPage() {
  return <ForYouClient />;
}
