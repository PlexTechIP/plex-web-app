import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | PlexTech - Berkeley",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
