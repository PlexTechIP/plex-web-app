import Image from "next/image";

import { Carousel } from "@/components/Carousel/carousel";
import HeroSection from "@/app/_components/hero/HeroSection";
import ContentSection from "@/app/_components/content/ContentSection";
import LeftToRightContent from "@/app/_components/content/LeftToRightContent";

const About: React.FC = () => {
  const clubSocialsImages: string[] = [
    "/about/club-social-1.webp",
    "/about/club-social-2.webp",
    "/about/club-social-3.webp",
    "/about/club-social-4.webp",
  ];

  const teamSocialsImages: string[] = [
    "/about/team-social-1.webp",
    "/about/team-social-2.webp",
    "/about/team-social-3.webp",
    "/about/team-social-4.webp",
  ];

  const mentorshipImages: string[] = [
    "/about/mentorship-1.webp",
    "/about/mentorship-2.webp",
    "/about/mentorship-3.webp",
    "/about/mentorship-4.webp",
  ];

  const chummingsImages: string[] = [
    "/about/chummings-1.webp",
    "/about/chummings-2.webp",
    "/about/chummings-3.webp",
    "/about/chummings-4.webp",
  ];

  const plexfamSections = [
    {
      title: "Club Socials",
      leftContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Club Socials</h2>
          <p className="text-xl">
            Every week, we host social events for all of our club members to attend, so that you have
            the opportunity to meet new members in the club and hang out with everyone! We have club retreats,
            chummings, day trips, and more.
          </p>
        </>
      ),
      rightContent: <Carousel images={clubSocialsImages} />,
    },
    {
      title: "Team Socials",
      leftContent: <Carousel images={teamSocialsImages} />,
      rightContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Team Socials</h2>
          <p className="text-xl">
            Our curriculum and industry project teams host team socials to get to know their team better while
            working on semester-long projects! Teams get to choose their socials, from karaoke to SF trips to bowling.
            We also have tons of cross team socials to get to know your fellow project devs.
          </p>
        </>
      ),
    },
    {
      title: "Mentorship",
      leftContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Mentorship</h2>
          <p className="text-xl">
            We have a big-little program where an upperclassmen pairs with one underclassmen and that
            upperclassmen will serve as a mentor for them in terms of PlexTech, academics, and their career! All
            senior members and alumni go out of their way to mentor new members too!
          </p>
        </>
      ),
      rightContent: <Carousel images={mentorshipImages} autoPlay interval={5000} />,
    },
    {
      title: "Chummings",
      leftContent: <Carousel images={chummingsImages} autoPlay interval={5000} />,
      rightContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Chummings</h2>
          <p className="text-xl">
            Every week of the semester, we place random members in our club together for a &quot;chumming&quot;,
            which is just a hangout to do whatever you please!
          </p>
        </>
      ),
    },
  ];

  const valuesSections = [
    {
      title: "Tenacious Leaders",
      leftContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Learning with Friends</h2>
          <p className="text-xl">
            We encourage a pedagogy-focused environment by engaging new members in a semester-long
            bootcamp that's focused on a particular area of their interest. We externalize this value by hosting
            external technical workshops which are open to absolutely anybody!
          </p>
        </>
      ),
      rightContent: (
        <Image
          src="/about/values/tenacious-learners.webp"
          alt="Learning with Friends"
          className="mx-auto"
          width={500}
          height={500}
          priority
        />
      ),
    },
    {
      title: "Industry Innovators",
      leftContent: (
        <Image
          src="/about/values/industry-innovators.webp"
          alt="Industry Innovators"
          className="mx-auto"
          width={500}
          height={500}
          priority
        />
      ),
      rightContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">Mentorship to Everyone</h2>
          <p className="text-xl">
            Our approach to building a community at PlexTech is to leave no member behind. Members who
            are just starting to navigate the tech landscape learn invaluable lessons by getting close with those who
            have years of experience in their position.
          </p>
        </>
      ),
    },
    {
      title: "Excellence Together",
      leftContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">#PlexFam</h2>
          <p className="text-xl">
            PlexTech focuses on community and collaboration to host a lifelong supportive social
            network. We develop interactive events and adventures to create a unique culture that engages every
            member.
          </p>
        </>
      ),
      rightContent: (
        <Image
          src="/about/values/excellence-together.webp"
          alt="Excellence Together"
          className="mx-auto"
          width={500}
          height={500}
          priority
        />
      ),
    },
    {
      title: "Pushing Limits",
      leftContent: (
        <Image
          src="/about/values/pushing-limits.webp"
          alt="Pushing Limits"
          className="mx-auto"
          width={500}
          height={500}
          priority
        />
      ),
      rightContent: (
        <>
          <h2 className="text-4xl font-extrabold mb-5">High Impact Projects with Modern Technology</h2>
          <p className="text-xl">
            Through our expansive industry network, we strive to give students a variety of projects
            that reflect the frontier of technology. These projects equip our members with the skills necessary to
            evolve the Silicon Valley landscape.
          </p>
        </>
      ),
    },
  ];

  return (
    <main>
      <HeroSection backgroundImage="/about/about-us-bg.webp" title="About Us" subtitle="Who We Are and What We Do" center={false} />

      {/* Mission Section */}
      <ContentSection title="Our Mission" isAlternate={true}>
        <LeftToRightContent
          leftChildren={
            <h3 className="text-2xl">
              PlexTech abides by one crucial mission: to equip motivated,
              ambitious, and eager students with the necessary technical skills to advance the modern technological
              landscape.
            </h3>
          }
          rightChildren={
            <Image
              src="/about/mission.webp"
              alt="Our Mission"
              className="mx-auto"
              width={500}
              height={500}
              priority
            />
          }
        />
      </ContentSection>

      {/* #PlexFam Section */}
      <ContentSection title="#PlexFam" isAlternate={false}>
        {plexfamSections.map((section, index) => (
          <LeftToRightContent
            key={index}
            leftChildren={section.leftContent}
            rightChildren={section.rightContent}
            styles="mb-36"
          />
        ))}
      </ContentSection>

      {/* Our Values */}
      <ContentSection title="Our Values" isAlternate={true}>
        {valuesSections.map((section, index) => (
          <LeftToRightContent
            key={index}
            leftChildren={section.leftContent}
            rightChildren={section.rightContent}
            styles="mb-36"
          />
        ))}
      </ContentSection>
    </main>
  );
}

export default About;