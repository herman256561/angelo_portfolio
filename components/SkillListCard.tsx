import React from "react";

type SkillListCardProps = {
  skills: string[];
};

const SkillListCard: React.FC<SkillListCardProps> = ({ skills }) => {
  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 transition duration-300 text-white p-6 rounded-2xl shadow-md w-full max-w-xl mx-auto">
      <div className="grid grid-cols-3 gap-y-4 text-center text-sm md:text-md lg:text-lg">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillListCard;
