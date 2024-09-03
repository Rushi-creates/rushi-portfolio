import React from 'react';
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const handleCardClick = () => {
    window.open(previewUrl, '_blank');
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Card Image */}
      <div
        className="h-52 md:h-60 relative bg-cover bg-center rounded-t-xl"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Glass Effect Overlay */}
        {/* <div className="absolute inset-0 bg-[#181818] bg-opacity-40 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-60"> */}
          {/* GitHub Link */}
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            onClick={(e) => e.stopPropagation()} // Prevent triggering the card's click
          >
            {/* <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" /> */}
          </Link>

        </div>
      {/* </div> */}

      {/* Card Content */}
      <div className="text-white bg-[#181818] py-6 px-4 rounded-b-xl ">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4 text-[12px]">{description}</p>


        {/* button here */}
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-lg">
          View Project 
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </div>

      </div>

      
    </div>
  );
};

export default ProjectCard;