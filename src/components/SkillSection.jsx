import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "Javascript", level: 70, category: "Frontend" },
  { name: "Reactjs", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },

  //Backend
  { name: "Nodejs", level: 60, category: "Backend" },
  { name: "Expressjs", level: 70, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Backend" },

  //Tools
  { name: "Git/Github", level: 70, category: "Tools" },
  { name: "VS code", level: 80, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];
const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'all' || skill.category === activeCategory)
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button key={index}
            className={cn("px-5 py-2 rounded-full transistion-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary")}
            onClick={() => setActiveCategory(category)}
            >{category}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card shadow-xs rounded-lg p-6 card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  {skill.name}
                </h3>
              </div>
              <div
                className="w-full bg-secondary/50 h-2  
              rounded-full mb-4"
              >
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
