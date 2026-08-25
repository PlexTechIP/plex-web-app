import React, { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  summary?: string;
  children: ReactNode;
  isAlternate: boolean;
  bgClassName?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  summary,
  children,
  isAlternate,
  bgClassName,
}) => {
  const appliedBgClass = bgClassName || (isAlternate ? "bg-slate-50" : "bg-white");
  const usesDarkBackground = Boolean(bgClassName && isAlternate);
  const textColor = usesDarkBackground ? "text-white" : "text-slate-900";
  const summaryColor = usesDarkBackground ? "text-white/85" : "text-slate-600";
  const highlightColor = usesDarkBackground ? "bg-white/80" : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600";

  return (
    <section
      className={`relative isolate overflow-hidden py-14 md:py-16 ${appliedBgClass} ${textColor}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/shapes-bg.webp')] bg-[length:1200px_auto] bg-center bg-repeat opacity-30 mix-blend-multiply"
      />
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          <div className={`mx-auto my-4 h-1 w-16 rounded-full ${highlightColor}`} />
          {summary && <p className={`mt-3 text-base leading-relaxed md:text-lg ${summaryColor}`}>{summary}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
