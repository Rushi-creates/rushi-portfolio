"use client";
import React from "react";
import Image from "next/image";

const skills = [
  { name: "Flutter", src: "/images/flutter-icon.png" },
  { name: "Next.js", src: "/images/nextjs-icon.png" },
  { name: "Django", src: "/images/django-icon.png" },
  { name: "Python", src: "/images/python-icon.png" },
  { name: "SvelteKit", src: "/images/svelte-icon.png" },
  // { name: "Flutter", src: "/images/flutter-icon.png" },
  // { name: "Next.js", src: "/images/nextjs-icon.png" },
];

const SkillsCarousel = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="relative">
          <div
            className="flex overflow-hidden whitespace-nowrap animate-scroll flex justify-center"
            // style={{ animation: "scroll 0s linear infinite" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center flex-col">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={50} // Adjust width and height as needed
                  height={50}
                  className="transition-transform transform hover:scale-110"
                />
                <p className="text-white text-center mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsCarousel;