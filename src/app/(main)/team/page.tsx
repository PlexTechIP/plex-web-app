import HeroSection from "@/app/_components/hero/HeroSection";
import ContentSection from "@/app/_components/content/ContentSection";
import TeamCardSection from "@/app/_components/content/TeamCardSection";
import { Member } from "@/app/_types/Member";

const Team: React.FC = () => {
  const teamSections = [
    {
      title: "Executive Board",
      description:
        "The Executive Board spearheads PlexTech as a whole, managing and planning all aspects of the club, including our external events, our client projects, curriculum, to our clubwide social events.",
      key: "Exec",
    },
    {
      title: "Course Instructors",
      description:
        "Our Project Managers and Course Instructors are key leaders within PlexTech, serving as the main touchpoint for our new students. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",
      key: "Curriculum Instructor",
    },
    {
      title: "Project Managers",
      description:
        "Our Project Managers are key leaders within PlexTech, serving as the main touchpoint for our new members and developers. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",
      key: "Project Manager",
    },
    {
      title: "Industry Developers",
      description:
        "Our developers are the heart and foundation of PlexTech. Devs constantly learn and gain experience in the software engineering industry through their project teams and carry PlexTech's culture throughout the club.",
      key: "Developer"
    },
    {
      title: "Senior Advisors",
      description:
        "Our Senior Advisors provided a plethora of experience and knowledge regarding not only software development but also leadership and management. Senior Advisors work on either a project team to help support Project Managers or help the executive board with high-level decision input.",
      key: "Senior Advisor",
    },
    {
      title: "Alumni",
      description:
        "Our alumni have contributed immensely during their time in PlexTech and have gone on to become greatly successful in the tech industry. We are grateful for their contributions and regularly collaborate with them, and they are valuable sources of knowledge.",
      key: "Alumni",
    },
  ];

  const members: Member[] = [
    {
      firstName: "Rohan",
      lastName: "Kakulawaram",
      imageUrl: "https://ca.slack-edge.com/T011VMRJU3W-U02EQQZJJ9L-e837f524fefc-512",
      position: "Exec",
      subposition: "President",
      blurb: "Hey! I am a 4th year studying CS. My main interests are in Software Engineering and ML. In my free time, I love watching baseball, hiking, and playing chess",
      linkedin: "https://linkedin.com/in/rohan-kakulawaram",
      instagram: "https://instagram.com/rohan_rk2003/?hl=en",
      calendly: "https://calendly.com/rohanrk2003",
    },
    {
      firstName: "Rohan",
      lastName: "Kakulawaram",
      imageUrl: "https://ca.slack-edge.com/T011VMRJU3W-U04MW1XRP5Z-0a2b10fa8f99-512",
      position: "Senior Advisor",
      subposition: "",
      blurb: "Hey! I am a 4th year studying CS. My main interests are in Software Engineering and ML. In my free time, I love watching baseball, hiking, and playing chess",
      linkedin: "https://linkedin.com/in/rohan-kakulawaram",
      instagram: "https://instagram.com/rohan_rk2003/?hl=en",
      calendly: "https://calendly.com/rohanrk2003",
    },
    {
      firstName: "Rohan",
      lastName: "Kakulawaram",
      imageUrl: "https://ca.slack-edge.com/T011VMRJU3W-U05SDDAAYAU-7cf87b48ed19-512",
      position: "Curriculum Instructor",
      subposition: "",
      blurb: "Hey! I am a 4th year studying CS. My main interests are in Software Engineering and ML. In my free time, I love watching baseball, hiking, and playing chess",
      linkedin: "https://linkedin.com/in/rohan-kakulawaram",
      instagram: "https://instagram.com/rohan_rk2003/?hl=en",
      calendly: "https://calendly.com/rohanrk2003",
    },
  ];

  return (
    <main>
      <HeroSection
        backgroundImage="/team/team-bg.webp"
        title="Our Team"
        subtitle="Meet the #PlexFam"
        center={false}
      />

      {teamSections.map((section, index) => {
        const filteredMembers = members.filter(
          (member) => member.position === section.key
        );

        return (
          <ContentSection
            key={index}
            title={section.title}
            summary={section.description}
            isAlternate={false}
            bgClassName="bg-white"
          >
            <TeamCardSection members={filteredMembers} />
          </ContentSection>
        );
      })}
    </main>
  );
};

export default Team;
