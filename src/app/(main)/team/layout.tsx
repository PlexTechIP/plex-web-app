import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | PlexTech - Berkeley",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
