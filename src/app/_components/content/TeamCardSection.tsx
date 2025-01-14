import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiCoffee } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Member } from "@/app/_types/Member";
import './TeamCardSection.css';

interface TeamCardSectionProps {
  members: Member[];
}

const TeamCardSection: React.FC<TeamCardSectionProps> = ({ members }) => {
  const gridCols = members.length < 3 ? "justify-center" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {members.map((member, index) => {
        return (
          <div key={index} className="flip-card w-[90%]">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div
                className="flip-card-front"
                style={{
                  background: "linear-gradient(to bottom, #FF833D 6.6%, #FF833D 13.3%, #F06751 20%, #E04867 26.6%, #B9009B 33%, #A736CE 40%, #ffffff 0%)",
                }}
              >
                <div className="flex justify-center">
                  {/* Profile Image */}
                  <div className="relative aspect-square rounded-full overflow-hidden mt-[20%] w-[57%]">
                    <Image
                      src={member.imageUrl ? member.imageUrl : '/team/not-found.jpg'}
                      alt={`${member.firstName}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="absolute bottom-5 w-full text-center">
                  <h5 className="font-bold text-2xl">
                    {member.firstName + " " + member.lastName}
                  </h5>
                  <h6 className="font-semibold text-xl text-gray-500">
                    {member.position}
                  </h6>
                  {member.position === "Alumni" && (
                    <p className="text-sm text-gray-600">
                      {member.currentCompany}
                    </p>
                  )}
                  <div className="flex justify-center">
                    <div className="rounded-full bg-orange-400 text-white mt-5 px-4 py-2 text-center max-w-fit">
                      Hover to learn more!
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back flex flex-col justify-between text-center h-full p-10">
                <div>
                  <h5 className="font-bold text-xl mb-0">
                    {member.firstName + " " + member.lastName}
                  </h5>
                  <h6 className="text-lg text-gray-700 mb-3">
                    {member.position}
                  </h6>
                  <p className="text-left">
                    {member.blurb}
                  </p>
                </div>

                <ul>
                  {member.linkedin && (
                    <li>
                      <Link
                        href={member.linkedin}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <FaLinkedinIn />
                        <span className="text-blue-500 hover:text-blue-800">LinkedIn</span>
                      </Link>
                    </li>
                  )}
                  {member.instagram && (
                    <li>
                      <Link
                        href={member.instagram}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <FaInstagram />
                        <span className="text-blue-500 hover:text-blue-800">Instagram</span>
                      </Link>
                    </li>
                  )}
                  {member.calendly && (
                    <li>
                      <Link
                        href={member.calendly}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <BiCoffee />
                        <span className="text-blue-500 hover:text-blue-800">Coffee Chat</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div >
  );
};

export default TeamCardSection;
