import HeroSection from '@/app/_components/hero/HeroSection';
import Image from "next/image";
import ContentSection from '@/app/_components/content/ContentSection';
import LinkButton from '@/app/_components/button/LinkButton';
import CardSection from '@/app/_components/content/CardSection';

const Roles: React.FC = () => {
  const pipelineRoles = [
    {
      image: "roles/student.webp",
      alt: "Student Icon",
      title: "Full Stack Course",
      content: "No experience necessary! Get your start in software engineering.",
    },
    {
      image: "roles/project-manager.webp",
      alt: "Project Manager Icon",
      title: "Project Management",
      content: "Lead a team of developers. Communicate with client representatives.",
    },
    {
      image: "roles/developer.webp",
      alt: "Developer Icon",
      title: "Industry",
      content: "Work on a client project team. Contribute to real company projects.",
    },
    {
      image: "roles/executive.webp",
      alt: "Executive Icon",
      title: "Executive",
      content:
        "Oversee an important aspect of the club (e.g., curriculum, projects, events, etc.).",
    },
  ];

  const newMemberRoles = [
    {
      title: "Student",
      image: "roles/two-tracks-orange.webp",
      description:
        "You can join the New Member Education Program with minimal programming experience. Our instructors, who have years of experience, will guide you through the basics of web development in a small, interactive group setting. You will gain plenty of hands-on experience through various projects, fully preparing you to hop onto a client project in your second semester!",
    },
  ];

  const developerRoles = [
    {
      title: "Work with a Variety of Clients",
      image: "roles/work-orange.webp",
      description:
        "Each semester we partner with 4 clients, ranging from high-growth startups to established industry leaders. We also strive to have a variety of projects, ranging from fullstack development to machine learning to data engineering.",
    },
    {
      title: "Build Real-World Projects",
      image: "roles/hands-on-orange.webp",
      description:
        "We make it a priority to find substantial projects where devs can have high impact on the client, whether it be an externally facing tool or building out key web infrastructure. We create an environment as close as possible to the real software engineering industry, from code reviews to testing to team standups.",
    },
    {
      title: "Be Part of a Tight-Knit Team",
      image: "roles/tight-knit-team-orange.webp",
      description:
        "Project teams form some of the closest bonds within PlexTech, going out for weekly team dinners as well as regular team socials and outings. It's especially unique working side-by-side with not fellow devs, but some of your closest friends.",
    },
  ];

  return (
    <main>
      <HeroSection backgroundImage='roles/roles-bg.webp' title='Roles in PlexTech' subtitle='Find your PlexTech fit!' center={false}/>

      {/* PIPELINE SECTION */}
      <ContentSection
        title="The PlexTech Pipeline"
        summary="PlexTech's purpose is to serve the entire software engineering pipeline, from having no prior experience to becoming tech leaders. We highly encourage members at all stages to take leadership roles and constantly progress every semester."
        isAlternate={false}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pipelineRoles.map((role, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={role.image} alt={role.alt} width={150} height={150} />
              <h4 className="mt-4 font-bold text-lg">{role.title}</h4>
              <p className="mt-2 text-gray-700">{role.content}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Image src="roles/pipeline.webp" alt="Pipeline Outline" width={800} height={200} />
        </div>
      </ContentSection>

      {/* CURRICULUM SECTION */}
      <ContentSection
        title="New Member Roles"
        summary="All new PlexTech developers start their journeys through a semester-long education program mentored by course instructors, who we also recruit for during the semester! Our program forms the foundation of our club, where students receive professional development in addition to learning technical skills such as full-stack development and software engineering."
        isAlternate={true}
      >
        <CardSection cards={newMemberRoles} />

        <div className='mt-8'>
          <LinkButton href='/join' isAlternate={true} innerText='Apply to be a new member!' />
        </div>
      </ContentSection>

      {/* DEVELOPER SECTION */}
      <ContentSection
        title="Industry Client Developer"
        summary="Our project developers make up the majority of the PlexTech population, with 4 client projects selected each semester for our members to work with diverse industries and tech stacks."
        isAlternate={false}
      >
        <CardSection cards={developerRoles} />

        <div className="mt-8">
          <LinkButton href='/projects' isAlternate={false} innerText='More about projects!' />
        </div>
      </ContentSection>
    </main>
  );
};

export default Roles;
