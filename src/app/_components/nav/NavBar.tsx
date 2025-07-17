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
            <nav className="hidden xl:flex space-x-6 text-lg font-bold">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  className="hover:text-orange-400"
                >
                  {item.name}
                </Link>
              ))}
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
            <nav className="flex flex-col space-y-4 font-bold text-lg text-gray-700">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  className="hover:text-orange-400"
                  onClick={closeSidebar}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;