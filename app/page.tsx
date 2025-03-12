import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start items-center bg-black text-white px-6 md:px-16 pt-4 md:pt-0"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-8 gap-6 max-w-7xl w-full">
        {/* Left: Image */}
        <div className="w-2/3 md:w-1/2 flex justify-center mt-4 md:mt-10">
          <Image
            src="/angelo_pic.jpg"
            alt="Angelo portrait"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg opacity-70"
          />
        </div>

        {/* Right: Text and Info */}
        <div className="w-2/3 md:w-1/2 flex justify-center md:justify-start">
          <div className="text-left max-w-md">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I am <br />
              <span className="text-white">Angelo</span>{' '}
              <span className="text-lg text-gray-400">(Si-Lian Wu)</span>
            </h1>

            <h2 className="text-2xl font-medium mt-4">Full-stack developer</h2>

            <p className="text-gray-300 mt-1">
              MS in Information Science @ UPitt <br />
              BS in Management Information Systems @ NCCU
            </p>

            {/* Social Buttons - add them later if needed */}
            <div className="flex gap-4 justify-start mt-6">
              {/* Social Links */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


