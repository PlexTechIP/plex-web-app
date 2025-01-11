import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  center?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, title, subtitle, children, center }) => {
  return (
    <section
      id="hero-section"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      <div className={`flex items-center justify-center h-full ${center ? '' : 'transform translate-y-28'}`}>
        <div className="text-white drop-shadow-2xl text-center">
          {title && <h1 className="text-5xl font-extrabold">{title}</h1>}
          {subtitle && <h2 className="text-2xl font-bold m-4">{subtitle}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
