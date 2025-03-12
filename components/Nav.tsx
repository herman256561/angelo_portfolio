import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-semibold"></div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#home">
              <span className="hover:text-gray-400 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <span className="hover:text-gray-400 cursor-pointer">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="#experiences">
              <span className="hover:text-gray-400 cursor-pointer">Experiences</span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className="hover:text-gray-400 cursor-pointer">Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
