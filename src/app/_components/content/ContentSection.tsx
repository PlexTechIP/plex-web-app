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
  const textColor = isAlternate ? "text-white" : "text-black";
  const highlightColor = isAlternate ? "bg-white" : "bg-orange-500";

  return (
    <section
      className={`py-16 ${appliedBgClass} ${appliedBgImageConfig} ${textColor}`}
      style={!bgClassName && bgImage ? { backgroundImage: `url('${bgImage}')` } : {}}
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-5">{title}</h2>
          <div className={`mx-auto my-4 w-32 h-1 ${highlightColor}`}></div>
          {summary && <p className="text-xl mt-4">{summary}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
