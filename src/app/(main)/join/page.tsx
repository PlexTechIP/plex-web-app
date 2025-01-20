import HeroSection from "@/app/_components/hero/HeroSection";
import ContentSection from "@/app/_components/content/ContentSection";
import LinkButton from "@/app/_components/button/LinkButton";

import './page.css'
import Link from "next/link";
import React from "react";

const Join: React.FC = () => {
  const heroButtons = [
    {
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSdlpPcvsT-Tqrh_pckZEgYTQoGukbEEb59FKQqzRL8IgLMJVA/viewform',
      label: 'Interest Form!',
    },
    {
      href: `${process.env.NEXT_PUBLIC_URL}/apply`,
      label: 'Apply!',
    },
    {
      href: 'https://docs.google.com/presentation/d/1qqPqyA8Osv_XR_TwKr5mwXADEvBRy7oPXUgamFaobPg/edit#slide=id.g1fdddeddcad_3_5',
      label: 'Interview Workshop Slides',
    },
  ];

  const timelineEvents = [
    {
      date: "1/21 - 1/28",
      title: "Tabling and Coffee Chats",
      time: "8 AM - 4 PM, Memorial Glade / Sproul",
      description:
        "Tabling is a great chance to meet members of PlexTech and learn more about our recruitment process. We will host in-person tabling at Memorial Glade and Upper Sproul. We also encourage you to sign up for 1-1 coffee chats with our exec members and fill out our interest form to keep updated with our recruitment events!",
      links: [
        { text: "Calendly Links", href: "/team" },
        { text: "Interest Form", href: "https://docs.google.com/forms/d/e/1FAIpQLSdlpPcvsT-Tqrh_pckZEgYTQoGukbEEb59FKQqzRL8IgLMJVA/viewform" },
      ],
    },
    {
      date: "1/27",
      title: "Clubs & Cookies",
      time: "8 PM - 10:00 PM, Location: TBD",
      description:
        "Stressed about club recruitment? Clubs and Cookies is an ambitious crossover event of a diverse set of technical student organizations at UC Berkeley. Join us to learn about web development, machine learning, data science, and more, and have your questions answered by our group of experienced panelists.",
    },
    {
      date: "1/21",
      title: "Applications Released!",
      time: "",
      description:
        "Start your journey with PlexTech at our application link! We are recruiting for new developers, curriculum students, and curriculum officers!",
      links: [{ text: "Apply Here", href: `${process.env.NEXT_PUBLIC_URL}/apply` }],
    },
    {
      date: "1/28",
      title: "Infosession #1",
      time: "8 PM - 10 PM, Location: Dwinelle 145",
      description:
        "Our infosessions are great opportunities to learn more about PlexTech and meet our members! Learn more about the different positions we're recruiting for, the recruitment process, and the great experiences and social events we'll be offering this semester, no matter your experience level.",
    },
    {
      date: "1/30",
      title: "Women in PlexTech Panel",
      time: "8 PM - 9 PM, Location: Dwinelle 145",
      description:
        "PlexTech places a great amount of importance on gender diversity in tech. Join our event to meet the female and non-binary identifying members of our club over complimentary snacks and refreshments.",
    },
    {
      date: "1/30",
      title: "Infosession #2",
      time: "9 PM - 10 PM, Location: Dwinelle 145",
      description:
        "Our infosessions are great opportunities to learn more about PlexTech and meet our members! Learn more about the different positions we're recruiting for, the recruitment process, and the great experiences and social events we'll be offering this semester, no matter your experience level.",
    },
    {
      date: "1/30",
      title: "Application Deadline",
      time: "11:59 PM",
      description:
        "Once you've learned about PlexTech, submit your application here! Our application only consists of three short answer questions and a resume drop. Note that applications are due by midnight, so make sure you don't submit yours late!",
      links: [{ text: "Apply Here", href: `${process.env.NEXT_PUBLIC_URL}/apply` }],
    },
    {
      date: "2/1-2/2",
      title: "Technical Interviews",
      time: "(Invite Only)",
      description:
        "After we review online applications, keep an eye out for decisions and instructions for how to prepare for your interview. This semester, we're completely revamping our technical interview process. Technical interviews will focus on your learning abilities and problem-solving skills, while establishing baseline knowledge of preliminary computer science concepts. Curriculum instructors will have a separate technical interview where applicants will simulate teaching a lesson.",
    },
    {
      date: "2/3",
      title: "Application Social: Meet PlexTech!",
      time: "(Invite Only)",
      description:
        "For those who make it past the written application review, congratulations! Applicants who move to forward stages will be invited to attend our recruitment social for a low stakes event to get to know PlexTech more intimately.",
    },
    {
      date: "2/4",
      title: "Behavioral Interviews",
      time: "(Invite Only)",
      description:
        "The last step of the interview process, behavioral interviews are meant to be conducted in a relaxed and informal setting. This gives us an opportunity to get to know you better and see if you're a great fit for PlexTech!",
    },
    {
      date: "2/5",
      title: "Decisions Released",
      time: "",
      description:
        "Mark your calendars and keep an eye on your email! Decisions will be released on Wednesday, February 5.",
    },
  ];

  const faqs = [
    {
      question: 'Do I need coding experience? Which new member role is right for me?',
      answer:
        'For our New Member Education Program, no web development experience is required! We just recommend having taken CS 61A or having a similar level of coding background! For our developer position, we expect that you have either worked on a sizeable web development project before or have completed a software engineering internship.',
    },
    {
      question: 'What separates PlexTech from other tech or consulting clubs?',
      answer:
        'PlexTech is a software engineering focused tech consulting club, so we primarily work to create high-impact software projects where our members get the chance to experience the entire software engineering spectrum, from project and product design to implementation under a diverse array of tech stacks to production delivery to our clients, who give us strong mentorship but also independence to input our own ideas and perspectives. We also pride ourselves on serving the entire pipeline, from having no web development/software engineering experience to being an experienced developer and software leader with a breadth of industry experience before moving into the real world. At the same time, there is no best software club at Berkeley! While we hope for you to choose PlexTech and join our community, there are plenty of other great communities to see and find what best suits you!',
    },
    {
      question: 'Will I be able to work on an industry client project in my first semester at PlexTech?',
      answer:
        'All new members, except for our course instructors, go through a semester-long fullstack web development internal course to prepare you for our industry project teams. Once you complete your first semester at PlexTech, you will always have the choice to become an industry developer. There is no application process to be an industry developer in the following semester!',
    },
    {
      question: 'What is the time commitment like for PlexTech?',
      answer:
        'The time commitment for PlexTech varies role by role, but typically a new member/developer can expect about 10-12 hours in total a week for all PlexTech activities, from our clubwide general meetings, team project meetings, and group work sessions to club socials and team events. We really like to emphasize community, collaboration, and working as a team, so the vast majority of the time commitment is spent with other PlexTech members!',
    },
  ];

  return (
    <main>
      <HeroSection backgroundImage="join/join-bg.webp" title="Spring 2025 Recruitment" subtitle="Who We Are and What We Do" center={false}>
        <div className="flex flex-wrap justify-center gap-4">
          {heroButtons.map((button, index) => (
            <LinkButton key={index} href={button.href} isAlternate={false} innerText={button.label} />
          ))}
        </div>
      </HeroSection>

      {/* Timeline Section */}
      <ContentSection
        title="Fall 2024 Recruitment Timeline"
        isAlternate={false}
      >
        <div className="relative">
          {/* Timeline Items */}
          <ul className="timeline timeline-split text-lg">
            {timelineEvents.map((event, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-info">
                  <span>{event.date}</span>
                </div>
                {/* Timeline Marker */}
                <div className="timeline-marker" />

                {/* Timeline Content */}
                <div className="timeline-content">
                  <h3 className="timeline-title text-2xl font-bold">{event.title}</h3>
                  {event.time && (
                    <p className="text-gray-600 font-bold">
                      {event.time}
                    </p>
                  )}
                  <p className="text-gray-800">
                    {event.description}
                  </p>
                  <div className="py-2">
                    {event.links?.map((link, linkIndex) => (
                      <React.Fragment key={linkIndex}>
                        <Link href={link.href} className="font-semibold hover:text-orange-500 underline">
                          {link.text}
                        </Link>
                        {linkIndex < event.links.length - 1 && <span className="text-gray-500"> | </span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Recruitment FAQs"
        isAlternate={true}
        bgClassName="bg-orange-600"
      >
        <div className="space-y-16 px-16">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold mb-2">{faq.question}</h4>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </main>
  );
};

export default Join;
