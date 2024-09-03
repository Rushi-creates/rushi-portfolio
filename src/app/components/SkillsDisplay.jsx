import React from 'react';

const skills = [
  { name: "Flutter", src: "/images/flutter-icon.png" },
  { name: "Next.js", src: "/images/nextjs-icon.png" },
  { name: "Django", src: "/images/django-icon.png" },
  { name: "Python", src: "/images/python-icon.png" },
  { name: "SvelteKit", src: "/images/svelte-icon.png" },
];

const SkillsDisplay = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start pt-8 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center w-15 h-15  rounded-lg">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={skill.src} 
              alt={skill.name} 
              className="w-8 h-8 object-cover" 
            />
          </div>
          {/* <span className="text-white text-sm mt-2">{skill.name}</span> */}
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;
