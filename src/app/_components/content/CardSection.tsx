import Image from 'next/image';
import React from "react";

interface CardSectionProps {
  cards: { title: string; image: string; description?: string }[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  const isSingle = cards.length === 1;
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4 text-slate-900">
      {cards.map((card) => (
        <div
          key={card.image}
          className={`group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg ${
            isSingle ? "max-w-sm" : "sm:w-80"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600" />
          <div className="p-5 pb-0">
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={284}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="mb-3 text-xl font-semibold tracking-tight">{card.title}</h3>
            {card.description && <p className="leading-relaxed text-slate-600">{card.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
