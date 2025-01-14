import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import NavBar from "./_components/nav/NavBar";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Home | PlexTech - Berkeley",
  description: "PlexTech is a technology club at UC Berkeley that serves one crucial purpose: to immerse motivated, ambitious, and eager students in technical software projects to set them up for a successful carreer through software industry projects, internal semester-long bootcamps, external technical workshops and a unique social presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1ZRE4ZD52Y" />
      <body
        className="antialiased"
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
