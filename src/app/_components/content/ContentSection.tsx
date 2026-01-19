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
  const bgImage = !bgClassName ? (isAlternate ? "shapes-bg-alt.webp" : "shapes-bg.webp") : "";
  const appliedBgClass = bgClassName || "";
  const appliedBgImageConfig = !bgClassName && bgImage
    ? `bg-contain bg-center`
    : "";
  const textColor = isAlternate ? "text-white" : "text-slate-900";
  const summaryColor = isAlternate ? "text-white/80" : "text-slate-600";
  const highlightColor = isAlternate ? "bg-white/70" : "bg-orange-500";

  return (
    <section
      className={`py-14 md:py-16 ${appliedBgClass} ${appliedBgImageConfig} ${textColor}`}
      style={!bgClassName && bgImage ? { backgroundImage: `url('${bgImage}')` } : {}}
    >
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          <div className={`mx-auto my-3 w-16 h-1 rounded-full ${highlightColor}`}></div>
          {summary && <p className={`text-base md:text-lg mt-3 ${summaryColor}`}>{summary}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
