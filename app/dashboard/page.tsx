import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Visitor dashboard | Santosh Poudel",
  description: "Live visitor statistics for this website.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dashboard" },
};

export default function Page() {
  return <Dashboard />;
}
