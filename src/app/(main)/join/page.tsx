import HeroSection from "@/app/_components/hero/HeroSection";
import LinkButton from "@/app/_components/button/LinkButton";

import './page.css'
import React from "react";

const Join: React.FC = () => {
  const heroButtons = [
    {
      href: '/join/interest',
      label: 'Interest Form',
    },
    {
      href: '/join/apply',
      label: 'Application Form',
    },
    {
      href: '/join/timeline',
      label: 'Recruitment Timeline',
    },
  ];


  return (
    <main>
      <HeroSection
        backgroundImage="/join/join-bg.webp"
        title="Spring 2026 Recruitment"
        subtitle="Recruitment information and application resources"
        center={false}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {heroButtons.map((button, index) => (
            <LinkButton key={index} href={button.href} isAlternate={false} innerText={button.label} />
          ))}
        </div>
      </HeroSection>

    </main>
  );
};

export default Join;
