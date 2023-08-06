import { Metadata } from "next";

export const metadata: Metadata = {
  title: "exaudie",
  description: "This is an example made by Eko Setiadi",
};

export default function ExaudieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
