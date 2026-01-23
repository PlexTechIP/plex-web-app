'use client'

import HeroSection from "@/app/_components/hero/HeroSection";
import ContentSection from "@/app/_components/content/ContentSection";
import TeamCardSection from "@/app/_components/content/TeamCardSection";
import { Member } from "@/app/_types/Member";
import { fetchMembers } from "@/app/_libs/fetchMembers";
import { useEffect, useState } from "react";
import MemberTree from "./MemberTree";

const Team: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  const teamSections = [
    {
      title: "Executive Board",
      description:
        "The Executive Board spearheads PlexTech as a whole, managing and planning all aspects of the club, including client projects, curriculum, and clubwide social events.",
      key: ["President", "VP of Internal", "VP of External", "VP of Curriculum", "VP of Projects", "VP of Public Relations", "Treasurer"],
    },
    {
      title: "Course Instructors",
      description:
        "Our Project Managers and Course Instructors are key leaders within PlexTech, serving as the main touchpoint for our new students. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",
      key: ["Curriculum Instructor"],
    },
    {
      title: "Project Managers",
      description:
        "Our Project Managers are key leaders within PlexTech, serving as the main touchpoint for our new members and developers. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",
      key: ["Project Manager"],
    },
    {
      title: "Industry Developers",
      description:
        "Our developers are the heart and foundation of PlexTech. Devs constantly learn and gain experience in the software engineering industry through their project teams and carry PlexTech's culture throughout the club.",
      key: ["Developer"]
    },
    {
      title: "Senior Advisors",
      description:
        "Our Senior Advisors provided a plethora of experience and knowledge regarding not only software development but also leadership and management. Senior Advisors work on either a project team to help support Project Managers or help the executive board with high-level decision input.",
      key: ["Senior Advisor"],
    },
    {
      title: "Alumni",
      description:
        "Our alumni have contributed immensely during their time in PlexTech and have gone on to become greatly successful in the tech industry. We are grateful for their contributions and regularly collaborate with them, and they are valuable sources of knowledge.",
      key: ["Alumni"],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMembers();
        setMembers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <HeroSection
        backgroundImage="team/team-bg.webp"
        title="Our Team"
        subtitle="Meet the #PlexFam"
        center={false}
      />
      <>
        {teamSections.map((section, index) => {
          const filteredMembers = members.filter(
            (member) => section.key.includes(member.position)
          ).sort(
            (a, b) =>
              section.key.indexOf(a.position) - section.key.indexOf(b.position)
          );;

          return (
            <ContentSection
              key={index}
              title={section.title}
              summary={section.description}
              isAlternate={false}
              bgClassName={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
            >
              <TeamCardSection members={filteredMembers} />
            </ContentSection>
          );
        })}
        <ContentSection
          title="Big-Little Tree"
          isAlternate={false}
          bgClassName="bg-slate-50"
        >
          <MemberTree members={members} />
        </ContentSection>
      </>
    </main>
  );
};

export default Team;
