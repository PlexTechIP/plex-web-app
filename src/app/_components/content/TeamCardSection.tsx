import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { BiCoffee } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Member } from "@/app/_types/Member";
import './TeamCardSection.css';

interface TeamCardSectionProps {
  members: Member[];
}

const TeamCardSection: React.FC<TeamCardSectionProps> = ({ members }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4">
      {members.map((member, index) => {
        const normalizedFirstName = member.firstName?.trim().toLowerCase();
        const imageSrc =
          normalizedFirstName === "deleena"
            ? "/team/shrek.png"
            : normalizedFirstName === "melody"
              ? "/team/melody.jpg"
              : member.imageUrl
                ? member.imageUrl
                : "/team/not-found.jpg";
        const imageFitClass =
          normalizedFirstName === "melody"
            ? "object-contain"
            : "object-cover object-[center_20%]";

        return (
          <div key={index} className="flip-card w-[300px] group">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front bg-white overflow-hidden relative">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-full h-full">
                  {/* Animated top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-100/40 to-purple-100/40 blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-pink-100/30 to-orange-100/30 blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Profile Image Container */}
                  <div className="flex justify-center pt-10 pb-6">
                    <div className="relative">
                      {/* Animated ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-md group-hover:animate-pulse transition-opacity"></div>

                      <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-white group-hover:scale-105 transition-all duration-300 shadow-lg">
                        <Image
                          src={imageSrc}
                          alt={`${member.firstName} ${member.lastName}`}
                          fill
                          className={`${imageFitClass} group-hover:scale-110 transition-transform duration-500`}
                          sizes="144px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="px-6 text-center space-y-3">
                    <h3 className="font-bold text-2xl text-gray-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-600 transition-all duration-300">
                      {member.firstName} {member.lastName}
                    </h3>
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-purple-50 border border-orange-100 group-hover:border-orange-300 group-hover:shadow-md transition-all duration-300">
                      <p className="font-medium text-sm text-gray-700">
                        {member.position}
                      </p>
                    </div>
                    {member.position === "Alumni" && member.currentCompany && (
                      <p className="text-sm text-gray-500 mt-2">
                        Now at <span className="font-semibold text-gray-700">{member.currentCompany}</span>
                      </p>
                    )}
                  </div>

                  {/* Hover hint with animation */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <div className="text-xs text-gray-400 font-medium tracking-wide uppercase group-hover:text-orange-500 transition-colors">
                      Hover for more info
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>

                <div className="h-full flex flex-col p-6 relative z-10 overflow-hidden">
                  {/* Animated top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-4 mt-2 flex-shrink-0">
                    <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-1">
                      {member.firstName} {member.lastName}
                    </h3>
                    <p className="text-xs font-medium text-gray-600">
                      {member.position}
                    </p>
                  </div>

                  {/* Blurb with quote styling - flexible height with max */}
                  <div className="flex-1 mb-4 relative min-h-0">
                    <div className="absolute left-0 top-0 text-3xl text-orange-200 font-serif leading-none">&ldquo;</div>
                    <div className="pl-6 h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      <p className="text-xs text-gray-700 leading-relaxed italic">
                        {member.blurb}
                      </p>
                    </div>
                  </div>

                  {/* Social Links with enhanced styling - fixed height container */}
                  <div className="space-y-2 flex-shrink-0">
                    {member.linkedin && (
                      <Link
                        href={`${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 transition-all duration-300 group/link hover:shadow-md"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center group-hover/link:bg-blue-500 transition-colors flex-shrink-0">
                          <FaLinkedinIn className="text-blue-600 group-hover/link:text-white text-xs transition-colors" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 group-hover/link:text-blue-700 transition-colors flex-1 truncate">
                          LinkedIn
                        </span>
                        <span className="text-gray-400 group-hover/link:text-blue-600 transition-transform group-hover/link:translate-x-1 flex-shrink-0">→</span>
                      </Link>
                    )}
                    {member.instagram && (
                      <Link
                        href={`${member.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border-2 border-gray-200 hover:border-pink-400 hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100/50 transition-all duration-300 group/link hover:shadow-md"
                      >
                        <div className="w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center group-hover/link:bg-gradient-to-br group-hover/link:from-pink-500 group-hover/link:to-purple-500 transition-all flex-shrink-0">
                          <FaInstagram className="text-pink-600 group-hover/link:text-white text-xs transition-colors" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 group-hover/link:text-pink-700 transition-colors flex-1 truncate">
                          Instagram
                        </span>
                        <span className="text-gray-400 group-hover/link:text-pink-600 transition-transform group-hover/link:translate-x-1 flex-shrink-0">→</span>
                      </Link>
                    )}
                    {member.calendly && (
                      <Link
                        href={member.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border-2 border-gray-200 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50 transition-all duration-300 group/link hover:shadow-md"
                      >
                        <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center group-hover/link:bg-orange-500 transition-colors flex-shrink-0">
                          <BiCoffee className="text-orange-600 group-hover/link:text-white text-xs transition-colors" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 group-hover/link:text-orange-700 transition-colors flex-1 truncate">
                          Coffee Chat
                        </span>
                        <span className="text-gray-400 group-hover/link:text-orange-600 transition-transform group-hover/link:translate-x-1 flex-shrink-0">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCardSection;
