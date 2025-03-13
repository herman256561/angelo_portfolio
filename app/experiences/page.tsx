import React from "react";
import ExperienceCard from "@/components/ExperienceCard";

const page = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start items-center bg-black text-white px-6 md:px-16 pt-4 pb-32 md:pt-0"
    >
      <div className="flex flex-col md:flex-col items-center md:gap-8 gap-6 max-w-7xl w-full pt-10">
        <ExperienceCard
          companyName="STIW Lab, University of Pittsburgh"
          companyLogo="/pitt_icon.jpg" // Make sure this image is in your /public folder
          positionTitle="Full-stack developer"
          startDate="Dec, 2024"
          endDate="Current"
          responsibilities={[
            "Developed and deployed a full-stack web application using Next.js, React.js, Node.js, and Tailwind CSS, integrating HERE Maps API for geospatial data visualization and improving accessibility by 40%.",
            "Integrated DevOps best practices, deploying on Vercel with CI/CD pipelines.",
            "Implemented a scalable, real-time database architecture with Firestore, optimizing query performance and ensuring high availability for user-submitted reports.",
          ]}
        />
        <ExperienceCard
          companyName="BNB Chain"
          companyLogo="/bnbchain_icon.png" // Make sure this image is in your /public folder
          positionTitle="Remote community specialist"
          startDate="Apr, 2022"
          endDate="Mar, 2023"
          responsibilities={[
            "Managed and executed digital marketing campaigns, achieving 6,500% growth in community engagement through partnerships with 25+ international blockchain teams.",
          ]}
        />
      </div>
    </section>
  );
};

export default page;
