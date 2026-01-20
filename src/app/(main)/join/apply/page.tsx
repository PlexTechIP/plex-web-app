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
        <div className="mb-4 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900">
          Applications will release Tuesday Jan 20th at 12PM.
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <iframe
            title="PlexTech Application Form"
            src="https://airtable.com/embed/appO26slQbDL1OgXz/pagTPYkRUbC2lHdzr/form"
            className="h-[540px] w-full rounded-lg border border-slate-200"
          />
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinApply;

