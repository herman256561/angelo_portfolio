import React from "react";
import Image from "next/image";

type ExperienceCardProps = {
  companyName: string;
  companyLogo: string; // Path to logo image (e.g., "/pitt_logo.png")
  positionTitle: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  companyLogo,
  positionTitle,
  startDate,
  endDate,
  responsibilities,
}) => {
  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 transition duration-300 text-white p-6 rounded-2xl shadow-md w-full max-w-4xl mx-auto mb-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0 w-16 h-16 flex items-center">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={64}
            height={64}
            className="rounded-xl object-contain drop-shadow-[0_0_5px_white] opacity-70"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">{companyName}</h3>
              <h4 className="text-md font-medium text-gray-300">
                {positionTitle}
              </h4>
            </div>
            <div className="text-sm text-gray-400 md:text-right mt-2 md:mt-0">
              {startDate} - {endDate}
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="list-disc list-inside mt-4 space-y-1 text-sm text-gray-200">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
