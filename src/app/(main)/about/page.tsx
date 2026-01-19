import Image from 'next/image';
import HeroSection from "@/app/_components/hero/HeroSection";
import LeftToRightContent from "@/app/_components/content/LeftToRightContent";

const About: React.FC = () => {
  const aboutSections = [
    {
      title: "Our Family",
      image: "/about/club-social-1.webp",
      description: [
        "Every week, we host social events for all of our club members to attend, so that you have the opportunity to meet new members in the club and hang out with everyone! We have club retreats, chummings, day trips, and more.",
        "Our curriculum and industry project teams host team socials to get to know their team better while working on semester-long projects! Teams get to choose their socials, from karaoke to SF trips to bowling. We also have tons of cross team socials to get to know your fellow project devs.",
      ],
    },
    {
      title: "Mentorship & Growth",
      image: "/about/mentorship-1.webp",
      description: [
        "We have a big-little program where an upperclassmen pairs with one underclassmen and that upperclassmen will serve as a mentor for them in terms of PlexTech, academics, and their career! All senior members and alumni go out of their way to mentor new members too!",
        "Our approach to building a community at PlexTech is to leave no member behind. Members who are just starting to navigate the tech landscape learn invaluable lessons by getting close with those who have years of experience in their position.",
      ],
    },
    {
      title: "Community & Culture",
      image: "/about/values/excellence-together.webp",
      description: [
        "PlexTech focuses on community and collaboration to host a lifelong supportive social network. We develop interactive events and adventures to create a unique culture that engages every member.",
        "Every week of the semester, we place random members in our club together for a \"chumming\", which is just a hangout to do whatever you please!",
      ],
    },
    {
      title: "Learning & Impact",
      image: "/about/values/pushing-limits.webp",
      description: [
        "We encourage a pedagogy focused environment by engaging new members in a semester-long bootcamp that is focused on a particular area of their interest. We externalize this value by hosting external technical workshops which are open to absolutely anybody!",
        "Through our expansive industry network, we strive to give students a variety of projects that reflect the frontier of technology. These projects equip our members with the skills necessary to evolve the Silicon Valley landscape.",
      ],
    },
  ];

  return (
    <main>
      <HeroSection backgroundImage="/about/about-us-bg.webp" title="About Us" subtitle="Who We Are and What We Do" center={false} />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-10 border-b border-slate-200">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                PlexTech abides by one crucial mission: to equip motivated, ambitious, and eager students with the
                necessary technical skills to advance the modern technological landscape.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/about/mission.webp"
                alt="Our Mission"
                className="rounded-xl border border-slate-200"
                width={520}
                height={420}
                priority
              />
            </div>
          </div>
          {aboutSections.map((section, index) => (
            <div
              key={section.title}
              className={`py-12 border-b border-slate-200 last:border-b-0 ${
                index % 2 === 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <LeftToRightContent
                leftChildren={
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-slate-800">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
                      {section.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                }
                rightChildren={
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="rounded-xl border border-slate-200"
                    width={560}
                    height={420}
                  />
                }
                styles={index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
              />
            </div>
          ))}
          <div className="pt-12">
            <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-slate-800 text-center">
              Our Destinations
            </h3>
            <p className="mt-4 text-center text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              PlexTech equips our members with the software engineering skills and experiences to land in the top tech
              companies, from FAANG to high-growth unicorns. We also have an amazing alumni network helping our new
              members navigate the software engineering world and find their own internship opportunities.
            </p>
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4">
              <Image
                src="/about/destinations.webp"
                alt="Our Destinations"
                className="rounded-lg"
                width={4880}
                height={1032}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;