import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions Page | ",
  description: "This is solutions page description",
};

const SolutionsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Solutions Page" />
    </>
  );
};

export default SolutionsPage;
