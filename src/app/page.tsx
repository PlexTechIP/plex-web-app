import React from 'react';
import Image from 'next/image';
import ContentSection from './_components/content/ContentSection';
import LinkButton from './_components/button/LinkButton';
import HeroSection from './_components/hero/HeroSection';
import LeftToRightContent from './_components/content/LeftToRightContent';
import { Carousel } from '@/components/Carousel/Carousel';

const Home: React.FC = () => {
  const groupImages = [
    "/home/plextech-group-1.webp",
    "/home/plextech-group-2.webp",
    "/home/plextech-group-3.webp",
    "/home/plextech-group-4.webp",
    "/home/plextech-group-5.webp",
    "/home/plextech-group-6.webp",
  ];

  //TODO: Update with Spring 2026
  const flyerImages = [ 
    "/home/flyer-front-fa25.webp",
  ];

  // TODO: Update values
  const stats = [
    { value: 12, label: 'Semesters of Experience' },
    { value: 33, label: 'Projects Completed' },
    { value: 50, label: 'Active Members' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection backgroundImage='/home/landing-bg.webp' center={true}>
        <LeftToRightContent
          leftChildren={
            <div className="text-center lg:text-left max-w-sm mt-28 lg:mt-0">
              <div className="font-mono text-4xl font-bold drop-shadow-2xl">
                <p>
                  &gt; git init your
                </p>
                <p
                  className="whitespace-nowrap overflow-hidden border-r-2 border-transparent animate-typing"
                >
                  journey into tech!
                </p>
              </div>
              <p className="text-xl lg:text-2xl mt-4 font-semibold">
                PlexTech, UC Berkeley&#39;s software engineering organization
              </p>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                <LinkButton href="/join/apply" isAlternate={false} innerText="Apply Now" />
                <LinkButton href="/about" isAlternate={true} innerText="Learn More!" />
              </div>
            </div>
          }
          rightChildren={
            <Image
              src="/home/dashboard-img.webp"
              alt="Dashboard"
              className="w-full max-w-md h-auto mx-auto"
              width={375}
              height={250}
            />
          }
        />
      </HeroSection>

      {/* We Are PlexTech Section */}
      <ContentSection title="About PlexTech" isAlternate={false}>
        <LeftToRightContent
          leftChildren={
            <Carousel images={groupImages} />
          }
          rightChildren={
            <div className="mb-4 text-lg">
              <h3 className="mb-4">
                We are a tight-knit community of students of various backgrounds who seek to provide each other with
                opportunities to find their foothold in the software engineering industry.
              </h3>
              <h3>
                Our mission is to guide our members, who enter as students in our new member education program,
                through the process of being developers, project managers, and eventually leaders in the tech space.
              </h3>
            </div>
          }
        />
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center font-semibold rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="flex justify-center">
                <div className="text-orange-500 text-4xl md:text-5xl font-bold">
                  {stat.value}
                </div>
              </div>
              <div className="text-lg md:text-xl mt-5 text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <LinkButton href="/about" isAlternate={false} innerText="About the Org" />
        </div>
      </ContentSection>

      {/* Recruitment Section */}
      <ContentSection
        title="Spring 2026 Recruitment & Applications"
        summary="We're always looking to add new members to our growing community. We welcome all Berkeley students to apply and join our community, regardless of major or technical experience."
        isAlternate={true}
        bgClassName='bg-gradient-to-br from-[#FF833D] via-[#F06751] via-[#E04867] via-[#B9009B] to-[#A736CE]'
      >
        <Carousel images={flyerImages} />
        <div className='pt-8'>
          <LinkButton href="/join/apply" isAlternate={false} innerText="Apply!" />
        </div>
      </ContentSection>
    </main>
  );
};

export default Home;
