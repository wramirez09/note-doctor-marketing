import { Metadata } from "next";
import PhysiciansPage from ".";
import { StructuredData } from "@/components/StructuredData";

const PhysiciansPageWrapper = () => {
  return <><StructuredData /><PhysiciansPage /></>;
};

export default PhysiciansPageWrapper;
