import Image from 'next/image';
import React from "react";

interface CardSectionProps {
  cards: { title: string; image: string; description?: string }[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  const isSingle = cards.length === 1;
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 text-black">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`group bg-white shadow-lg rounded-lg w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            isSingle ? "max-w-sm" : "sm:w-80"
          }`}
        >
          <div className="p-4">
            <div className="relative h-36 w-full rounded-t-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={284}
                className="object-contain rounded-t-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            {card.description && <p className="text-gray-700">{card.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
