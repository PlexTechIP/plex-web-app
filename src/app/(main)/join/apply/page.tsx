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
        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          If the application does not load below, please use the direct link:
          <a
            href="https://plextech-application-portal.vercel.app/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-semibold text-orange-600 underline"
          >
            Open Application Portal
          </a>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <iframe
            title="PlexTech Application Portal"
            src="https://plextech-application-portal.vercel.app/apply"
            className="h-[820px] w-full rounded-lg border border-slate-200"
          />
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinApply;
