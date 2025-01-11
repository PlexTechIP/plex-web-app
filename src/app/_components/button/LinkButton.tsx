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
      <Link href={href}>
        <button
          type="button"
          className={`btn btn-secondary px-6 py-2 text-xl rounded-xl hover:bg-orange-600 hover:text-white ${styles}`}
        >
          {innerText}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
