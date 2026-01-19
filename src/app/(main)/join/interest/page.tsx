import ContentSection from "@/app/_components/content/ContentSection";
import HeroSection from "@/app/_components/hero/HeroSection";

const JoinInterest: React.FC = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/join/join-bg.webp"
        title="Interest Form"
        subtitle="Share your interest to stay updated"
        center={false}
      />
      <ContentSection title="Interest Form" isAlternate={false}>
        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          If the form does not load below, please use the direct link:
          <a
            href="https://forms.gle/JxS8GykwzZCZoSKTA"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-semibold text-orange-600 underline"
          >
            Open Interest Form
          </a>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <iframe
            title="PlexTech Interest Form"
            src="https://forms.gle/JxS8GykwzZCZoSKTA"
            className="h-[720px] w-full rounded-lg border border-slate-200"
          />
        </div>
      </ContentSection>
    </main>
  );
};

export default JoinInterest;

