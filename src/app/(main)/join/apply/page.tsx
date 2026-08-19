import ContentSection from "@/app/_components/content/ContentSection";
import HeroSection from "@/app/_components/hero/HeroSection";

const JoinApply: React.FC = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/join/join-bg.webp"
        title="Application Form"
        subtitle="Submit your application to join PlexTech"
        center={false}
      />
      <ContentSection title="Application Form" isAlternate={false}>
        <div className="rounded-xl border border-orange-200 bg-orange-50 px-6 py-10 text-center text-orange-900">
          <h2 className="mb-2 text-xl font-semibold">Applications are temporarily closed</h2>
          <p className="text-sm">Please check back soon for the Fall 2026 application.</p>
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinApply;
