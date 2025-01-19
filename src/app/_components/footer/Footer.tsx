import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { menuItems } from '@/app/_utils/menuItems';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white p-10">
      <div className="container mx-auto flex flex-wrap justify-evenly">
        {/* Description Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <p className="text-white text-lg">
            We are a student group acting independent of the University of California. We take full responsibility for
            our organization and this web site.
          </p>
          <Link
            href="https://www.ocf.berkeley.edu"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
              alt="Hosted by the OCF"
              width={75}
              height={50}
              className="border-0 py-2"
            />
          </Link>
          <hr className="border-white mb-4" />
          <p className="text-white">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} passHref className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <Link
              href="https://www.facebook.com/PlexTech-100710408175971/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.linkedin.com/company/64691722"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.instagram.com/plextech.berkeley/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
