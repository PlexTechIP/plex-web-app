import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  isAlternate: boolean;
  innerText: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  isAlternate,
  innerText,
}) => {
  const styles = isAlternate ? "bg-white text-orange-500" : "bg-orange-500 text-white";

  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className={`inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-2.5 text-base font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 active:translate-y-0 ${styles}`}
      >
        {innerText}
      </Link>
    </div>
  );
};

export default LinkButton;
