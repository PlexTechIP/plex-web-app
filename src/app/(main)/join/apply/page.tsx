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
        Applications are due January 29, 2026 at 11:59 PM.
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex justify-center">
            <a
              href="https://main.d3r0mhpqy3oqvn.amplifyapp.com/apply"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              Open the application in a new tab
            </a>
          </div>
          <iframe
            title="PlexTech Application Form"
            src="https://main.d3r0mhpqy3oqvn.amplifyapp.com/apply"
            className="h-[700px] w-full rounded-lg border border-slate-200"
          />
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinApply;
