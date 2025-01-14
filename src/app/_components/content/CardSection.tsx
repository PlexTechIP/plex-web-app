import React from "react";
import Image from "next/image";

interface CardSectionProps {
  cards: { title: string; image: string; description?: string }[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <div className="flex justify-center flex-wrap gap-6 p-4 text-black">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg w-full sm:w-80 md:w-95"
        >
          <div className="p-2">
            <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">{card.title}</h3>
            {card.description && <p className="text-gray-700">{card.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
