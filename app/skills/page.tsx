import React from "react";
import SkillListCard from "@/components/SkillListCard";

const page = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start items-center bg-black text-white px-6 md:px-16 pt-10 pb-32"
    >
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-7xl w-full">
        {/* Tech Skills */}
        <div className="flex flex-col items-center w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold">Tech Skills</h1>
          <SkillListCard
            skills={[
              "Javascript",
              "Typescript",
              "Python",
              "MySQL",
              "SQL",
              "MongoDB",
              "NoSQL",
              "Node.js",
              "Next.js",
              "Express.js",
              "React",
              "Git",
              "Docker",
              "Kubernetes",
              "Nginx",
              "Terraform",
              "Skaffold",
              "HTML",
              "CSS",
              "Django",
              "C#",
              "Kotlin",
              "Solidity",
              "Java",
              "Postman",
              "Bootstrap",
            ]}
          />
        </div>

        {/* Other Skills */}
        <div className="flex flex-col items-center w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold">Other Skills</h1>
          <SkillListCard
            skills={[
              "Cloud Computing",
              "Database Management",
              "RESTful APIs",
              "Microservices",
              "MVC",
              "AWS",
              "CI/CD",
              "Web Services",
              "DevOps",
              "SDLC",
              "UI/UX Design",
              "Information Security",
              "Networks",
              "Blockchain",
              "Communication",
              "Figma",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
