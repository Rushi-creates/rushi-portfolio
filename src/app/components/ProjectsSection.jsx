"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Zarento Clothing Rental Ecommerce",
    description: "Our startup site",
    image: "/images/projects/zarento.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.zarento.in/",
    previewUrl: "https://www.zarento.in/",
  },
  {
    id: 2,
    title: "Current Trends - Flaunt your likings",
    description:"Social media to share your fav songs/movies/series",
    image: "/images/projects/current-trend-thumbnail.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://drive.google.com/drive/folders/1beJTDh9LpEDU8LRVJFQriVKY1DS08cWc?usp=sharing",
    previewUrl: "https://drive.google.com/drive/folders/1beJTDh9LpEDU8LRVJFQriVKY1DS08cWc?usp=sharing",
  },
  {
    id: 3,
    title: "BizCon - Validate Startup ideas",
    description: "Find right talent for your idea, made using Flutter",
    image: "/images/projects/bizcon-thumbnail.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://drive.google.com/drive/folders/1EFwOjO0xR26APj1C8lizlnBWPc6gYap5?usp=sharing",
    previewUrl: "https://drive.google.com/drive/folders/1EFwOjO0xR26APj1C8lizlnBWPc6gYap5?usp=sharing",
  },
  {
    id: 4,
    title: "NoQueue - Queue management",
    description: "Made with Flutter",
    image: "/images/projects/noqueue1.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://drive.google.com/file/d/1LoTCDWbYhhCljxVvYrUZnmffFXY1uuMW/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/1LoTCDWbYhhCljxVvYrUZnmffFXY1uuMW/view?usp=sharing",
  },
  {
    id: 5,
    title: "Youtube Shorts Ai Generator Bot",
    description: "Python bot that generates n number of shorts using Ai",
    image: "/images/projects/yt-python-bot.png",
    tag: ["All", "Web"],
    gitUrl: "https://drive.google.com/drive/folders/1fc48NGPZccdSmiIAwQvIsN7hyNMRn_2-?usp=sharing",
    previewUrl: "https://drive.google.com/drive/folders/1fc48NGPZccdSmiIAwQvIsN7hyNMRn_2-?usp=sharing",
  },
  {
    id: 6,
    title: "Offline Math Quiz App",
    description: "Created with ♥ using flutter",
    image: "/images/projects/math-quiz1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://drive.google.com/file/d/1hm436nU_xKIkGw4TwSwHXkNQjN6bKWo3/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/1hm436nU_xKIkGw4TwSwHXkNQjN6bKWo3/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
       
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
