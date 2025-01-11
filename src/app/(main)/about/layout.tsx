import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | PlexTech - Berkeley",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
