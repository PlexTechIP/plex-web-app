'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/app/_utils/menuItems';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between py-4`}>
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" passHref className="flex items-center">
                <Image
                  src="/plextech-logo.webp"
                  alt="PlexTech Logo"
                  width={50}
                  height={75}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-4 text-base font-semibold tracking-tight">
              {menuItems.map((item) => {
                const isPortal = item.name === "Members Portal";
                const isJoin = item.name === "Join Us";
                if (isJoin) {
                  return (
                    <div key={item.name} className="relative group">
                      <span className="px-2 py-1 text-current cursor-default">
                        {item.name}
                      </span>
                      <div className="absolute left-0 top-full w-56 rounded-xl border border-slate-200 bg-white shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                        <div className="py-2">
                          <Link
                            href="/join/apply"
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          >
                            Application Form
                          </Link>
                          <Link
                            href="/join/interest"
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          >
                            Interest Form
                          </Link>
                          <Link
                            href="/join/timeline"
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          >
                            Recruitment Timeline
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                    className={
                      isPortal
                        ? "rounded-full border border-orange-400/70 px-4 py-1.5 text-orange-500 hover:bg-orange-50"
                        : "px-2 py-1 text-current hover:text-orange-400"
                    }
                >
                  {item.name}
                </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden">
              <button
                onClick={toggleSidebar}
                className="text-4xl hover:text-orange-400"
              >
                <span>☰</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={closeSidebar}
        >
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col py-4 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3 font-semibold text-lg text-gray-700">
              {menuItems.map((item) => {
                const isPortal = item.name === "Members Portal";
                const isJoin = item.name === "Join Us";
                if (isJoin) {
                  return (
                    <div key={item.name} className="flex flex-col space-y-2">
                      <span className="px-2 py-1 text-gray-700">
                        {item.name}
                      </span>
                      <div className="ml-3 flex flex-col space-y-2 text-base font-medium text-gray-600">
                        <Link
                          href="/join/apply"
                          className="px-2 py-1 hover:text-orange-400"
                          onClick={closeSidebar}
                        >
                          Application Form
                        </Link>
                        <Link
                          href="/join/interest"
                          className="px-2 py-1 hover:text-orange-400"
                          onClick={closeSidebar}
                        >
                          Interest Form
                        </Link>
                        <Link
                          href="/join/timeline"
                          className="px-2 py-1 hover:text-orange-400"
                          onClick={closeSidebar}
                        >
                          Recruitment Timeline
                        </Link>
                      </div>
                    </div>
                  );
                }
                return (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                    className={
                      isPortal
                        ? "rounded-full border border-orange-400/70 px-4 py-2 text-orange-500 hover:bg-orange-50"
                        : "px-2 py-1 hover:text-orange-400"
                    }
                  onClick={closeSidebar}
                >
                  {item.name}
                </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;