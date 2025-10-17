import { Metadata } from "next";
import PhysiciansPage from ".";
import { StructuredData } from "@/components/StructuredData";

export const runtime = "edge";
export const dynamic = "force-dynamic";
const PhysiciansPageWrapper = () => {
  return <><StructuredData /><PhysiciansPage /></>;
};

export default PhysiciansPageWrapper;
