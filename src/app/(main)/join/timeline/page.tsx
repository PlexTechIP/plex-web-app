import ContentSection from "@/app/_components/content/ContentSection";
import HeroSection from "@/app/_components/hero/HeroSection";
import Link from "next/link";
import "../page.css";

const JoinTimeline: React.FC = () => {
  const timelineEvents = [
    {
      date: "1/20 - 1/29",
      title: "Tabling and Coffee Chats",
      time: "8 AM - 4 PM, Memorial Glade / Sproul",
      description:
        "Tabling is a great chance to meet members of PlexTech and learn more about our recruitment process. We will host in-person tabling at Memorial Glade and Upper Sproul. We also encourage you to sign up for 1-1 coffee chats with our exec members and fill out our interest form to keep updated with our recruitment events!",
      links: [
        { text: "Calendly Links", href: "/team" },
        { text: "Interest Form", href: "https://forms.gle/JxS8GykwzZCZoSKTA" },
      ],
    },
    {
      date: "1/26",
      title: "Clubs & Cookies",
      time: "8 PM - 10 PM, Location: Dwinelle 155",
      description:
        "Stressed about club recruitment? Clubs and Cookies is an ambitious crossover event of a diverse set of technical student organizations at UC Berkeley. Join us to learn about web development, machine learning, data science, and more, and have your questions answered by our group of experienced panelists.",
    },
    {
      date: "1/20",
      title: "Applications Released!",
      time: "",
      description:
        "Start your journey with PlexTech at our application link! We are recruiting for new curriculum students!",
      links: [{ text: "Apply Here", href: "https://airtable.com/appO26slQbDL1OgXz/pagTPYkRUbC2lHdzr/form" }],
    },
    {
      date: "1/27",
      title: "Infosession #1",
      time: "8 PM - 10 PM, Location: Dwinelle 234",
      description:
        "Our infosessions are great opportunities to learn more about PlexTech and meet our members! Learn more about the different positions we're recruiting for, the recruitment process, and the great experiences and social events we'll be offering this semester, no matter your experience level.",
    },
    {
      date: "1/28",
      title: "Women in PlexTech Panel",
      time: "8 PM - 10 PM, Location: Dwinelle 234",
      description:
        "PlexTech places a great amount of importance on gender diversity in tech. Join our event to meet the female and non-binary identifying members of our club over complimentary snacks and refreshments.",
    },
    {
      date: "1/29",
      title: "Infosession #2",
      time: "8 PM - 10 PM, Location: Dwinelle 228",
      description:
        "Our infosessions are great opportunities to learn more about PlexTech and meet our members! Learn more about the different positions we're recruiting for, the recruitment process, and the great experiences and social events we'll be offering this semester, no matter your experience level.",
    },
    {
      date: "1/29",
      title: "Application Deadline",
      time: "11:59 PM",
      description:
        "Once you've learned about PlexTech, submit your application here! Our application only consists of three short answer questions and a resume drop. Note that applications are due by midnight, so make sure you don't submit yours late!",
      links: [{ text: "Apply Here", href: "https://airtable.com/appO26slQbDL1OgXz/pagTPYkRUbC2lHdzr/form" }],
    },
    {
      date: "1/31-2/1",
      title: "Technical Interviews",
      time: "(Invite Only)",
      description:
        "After we review online applications, keep an eye out for decisions and instructions for how to prepare for your interview. This semester, we're completely revamping our technical interview process. Technical interviews will focus on your learning abilities and problem-solving skills, while establishing baseline knowledge of preliminary computer science concepts. Curriculum instructors will have a separate technical interview where applicants will simulate teaching a lesson.",
    },
    {
      date: "2/2",
      title: "Application Social: Meet PlexTech!",
      time: "(Invite Only)",
      description:
        "For those who make it past the written application review, congratulations! Applicants who move to forward stages will be invited to attend our recruitment social for a low stakes event to get to know PlexTech more intimately.",
    },
    {
      date: "2/3",
      title: "Behavioral Interviews",
      time: "(Invite Only)",
      description:
        "The last step of the interview process, behavioral interviews are meant to be conducted in a relaxed and informal setting. This gives us an opportunity to get to know you better and see if you're a great fit for PlexTech!",
    },
    {
      date: "2/3",
      title: "Decisions Released",
      time: "",
      description:
        "Mark your calendars and keep an eye on your email! Decisions will be released on Tuesday, January 3rd.",
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
      <HeroSection
        backgroundImage="/join/join-bg.webp"
        title="Spring 2026 Recruitment Timeline"
        subtitle="Key dates and events for the recruitment cycle"
        center={false}
      />
      <ContentSection title="Spring 2026 Recruitment Timeline" isAlternate={false}>
        <div className="relative">
          <ul className="timeline timeline-split text-lg">
            {timelineEvents.map((event, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-info">
                  <span>{event.date}</span>
                </div>
                <div className="timeline-marker" />
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
                      <span key={linkIndex}>
                        <Link href={link.href} className="font-semibold hover:text-orange-500 underline">
                          {link.text}
                        </Link>
                        {linkIndex < event.links.length - 1 && <span className="text-gray-500"> | </span>}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>
      <ContentSection
        title="Recruitment FAQs"
        isAlternate={true}
        bgClassName="bg-orange-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 p-6 text-left shadow-sm"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg md:text-xl font-semibold text-white">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-white/70 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinTimeline;

