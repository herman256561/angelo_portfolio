"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo / Site title (optional) */}
        <div className="text-xl font-semibold">Angelo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <span className="hover:text-gray-400 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <span className="hover:text-gray-400 cursor-pointer">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="/experiences">
              <span className="hover:text-gray-400 cursor-pointer">
                Experiences
              </span>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon (mobile only) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-3 bg-black">
          <Link href="/">
            <span className="block hover:text-gray-400">Home</span>
          </Link>
          <Link href="/skills">
            <span className="block hover:text-gray-400">Skills</span>
          </Link>
          <Link href="/experiences">
            <span className="block hover:text-gray-400">Experiences</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
