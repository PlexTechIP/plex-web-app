import Form from 'next/form'
import HeroSection from "@/app/_components/hero/HeroSection";
import ContentSection from "@/app/_components/content/ContentSection";
import CardSection from "@/app/_components/content/CardSection";
import LinkButton from "@/app/_components/button/LinkButton";
import DividedTextCarousel from "@/components/Carousel/DividedTextCarousel";
import InputField from "@/components/ContactForm/InputField";
import TextAreaField from "@/components/ContactForm/TextAreaField";

const Projects: React.FC = () => {
  const ourServices = [
    {
      image: "/projects/web-development.webp",
      title: "Full Stack Web Development",
    },
    {
      image: "/projects/machine-learning.webp",
      title: "Machine Learning + Computer Vision",
    },
    {
      image: "/projects/data-visualization.webp",
      title: "Data Engineering + Visualization",
    },
  ]

  const portfolio = [
    {
      image: "/projects/portfolio/zendesk.webp",
      title: "Backend + Frontend",
      description:
        "Developed a microservice with a frontend to configure SLA policies and a backend to facilitate requests and send notifications; unit tests to validate interactions between the two components. Notifies 1,000,000+ SLA requests per day.",
    },
    {
      image: "/projects/portfolio/atlassian.webp",
      title: "NLP + Frontend",
      description:
        "Developed a fully trained NLP model that has been deployed / hosted on AWS EC2; currently, groups 1000+ issues a day on Jira to save time for end users.",
    },
    {
      image: "/projects/portfolio/flexcar.webp",
      title: "Backend + Mobile Dev",
      description:
        "Developed a task management mobile app that facilitates task assignment and tracking, incorporates user authentication, including data models, RESTful APIs, and front-end components, all managed by a full-stack team.",
    },
    {
      image: "/projects/portfolio/prove.webp",
      title: "Backend + Data Eng + Frontend",
      description:
        "Built a software that detected anomalies in user entry data to help Prove find false identities and inconsistencies in customer endpoint usage faster.",
    },
    {
      image: "/projects/portfolio/faradayfuture.webp",
      title: "CV + ML",
      description:
        "Developed a driver monitoring system for FF's vehicles to detect symptoms of drowsiness using computer vision and neural networks, increasing safety and responsibility on the road.",
    },
    {
      image: "/projects/portfolio/attain.webp",
      title: "Backend + Frontend",
      description:
        "Worked on APIs to modify the database for item lookup, cart, and order functionality for customers. The team created a web app for Attain to input new products and filter customer orders.",
    },
    {
      image: "/projects/portfolio/tailorbird.webp",
      title: "Mobile Dev",
      description:
        "Built a cross-platform mobile application which digitizes contractors' sitewalks using a fast and intuitive interface while automatically saving updated property information.",
    },
    {
      image: "/projects/portfolio/musematch.webp",
      title: "Mobile Dev + Data Eng",
      description:
        "Engineered a social-networking mobile app to build personal connections based on similar music taste identified through the Spotify web API, enabling original music recommendations.",
    },
    {
      image: "/projects/portfolio/thryft.webp",
      title: "Backend + Frontend",
      description:
        "Worked on rolling out several features such as revenue charts, custom navbars, and email lists for a platform for Instagram sellers to easily generate custom websites.",
    },
    {
      image: "/projects/portfolio/scholarhub.webp",
      title: "Backend + ML",
      description:
        "Implemented a machine learning algorithm to measure student learning styles and created the backend for a groups feature to support online student success.",
    },
    {
      image: "/projects/portfolio/centrl.webp",
      title: "Frontend + Backend",
      description:
        "Created a full-stack service that helped CENTRL visualize and organize its customer data in order to assist them when identifying problems.",
    },
    {
      image: "/projects/portfolio/perimeter.webp",
      title: "Frontend + Backend",
      description:
        "A full-stack application where customers (public safety agencies) can view relevant usage data and analytics from incidents/exercises in an intuitive interface.",
    },
  ];

  const testimonials = [
    {
      text: "Working with the PlexTech club has been a really positive experience. These are bright, hungry students that are out to make a big impact. They are professional, adapt to special requests, and deliver on scope and on time.",
      author: "CEO @ Intern Pursuit",
    },
    {
      text: "PlexTech team is professional, passionate, and committed throughout the whole project. The PM and developers are well-organized, and they work diligently to deliver quality results on time. It's a pleasure to work with them.",
      author: "Senior Engineer @ Faraday Future",
    },
    {
      text: "We worked with PlexTech to help our customer support team in gathering data and responding to cases. The team was professional and delivered clean, well-designed work on schedule. The tool has been a great asset to our support team.",
      author: "CTO @ CENTRL",
    },
  ];

  return (
    <main>
      <HeroSection
        backgroundImage="/projects/projects-bg.webp"
        title="Industry Projects"
        subtitle="Find your footing in the software industry"
        center={false}
      >
        <LinkButton href="/join" isAlternate={false} innerText="Apply!" />
      </HeroSection>

      {/* Our Services Section */}
      <ContentSection
        title="Our Services"
        summary="At PlexTech, we offer a wide array of software engineering
          services to fit our clients' diverse needs. While a large portion of our projects focus on fullstack
          development (with a focus in frontend or backend), we love the opportunity to expose our developers to
          other stacks and technologies from other software engineering disciplines."
        isAlternate={false}
      >
        <CardSection cards={ourServices} />
      </ContentSection>

      {/* Our Project Portfolio */}
      <ContentSection
        title="Our Project Portfolio"
        summary="Our client list ranges from a plethora of diverse industries,
          including identity management, automobiles, ecommerce, social media,
          and edtech companies, ranging from high-growth Y-combinator startups
          to established tech giants."
        isAlternate={true}
      >
        <CardSection cards={portfolio} />
      </ContentSection>

      {/* Testimonials Section */}
      <ContentSection
        title="Here's What Our Clients Have To Say"
        isAlternate={true}
      >
        <DividedTextCarousel content={testimonials} />
      </ContentSection>

      {/* Contact Section */}
      <ContentSection
        title="Contact Us!"
        summary="We're always looking to add new members to our budding community.
          We welcome all Berkeley students, regardless of technical experience, with a role to fit your social and professional goals."
        isAlternate={false}
      >
        <div className="bg-white p-8 shadow-md rounded-lg">
          <Form
            action="https://formspree.io/xayoeqwa"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                id="fname"
                name="firstname"
                type="text"
                placeholder="Your name.."
              />
              <InputField
                label="Last Name"
                id="lname"
                name="lastname"
                type="text"
                placeholder="Your last name.."
              />
            </div>
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Your email.."
              required={true}
            />
            <InputField
              label="Subject"
              id="subject"
              name="subject"
              type="text"
              placeholder="Your subject.."
              required={true}
            />
            <TextAreaField
              label="Message"
              id="message"
              name="message"
              placeholder="Your message.."
              required={true}
            />
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      </ContentSection>
    </main>
  );
};

export default Projects;
