"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // For the logo/icon image
import Logo from '../../../../public/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 flex justify-between items-center p-4 bg-white shadow-md z-10">
      <div className="flex items-center gap-2">
        <Image src={Logo.src} alt="Logo" width={50} height={50} />
        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="lg:hidden flex flex-col justify-between items-center w-6 h-6">
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? 'rotate-[-45deg] translate-y-[-2px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex gap-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-[80vw] text-center' : 'hidden'
        }`}
      >
        <li>
          <Link href="/" className="text-black font-semibold text-lg py-2 block">
            Home
          </Link>
        </li>
        <li>
          <Link href="/quotations" className="text-black font-semibold text-lg py-2 block">
            Quotation
          </Link>
        </li>
        <li>
          <Link href="/pricingpage" className="text-black font-semibold text-lg py-2 block">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/solarsolutions" className="text-black font-semibold text-lg py-2 block">
            Our Service
          </Link>
        </li>
        <li>
          <Link href="/contactusform" className="text-black font-semibold text-lg py-2 block">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
