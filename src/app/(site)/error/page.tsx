import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";

const TITLE = "Page Not Found";
const DESCRIPTION = "The page you were looking for could not be found.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/error" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/error",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ErrorPage() {
  return (
    <>
      <Breadcrumb pageName="404 Page" />
      <NotFound />
    </>
  );
}
