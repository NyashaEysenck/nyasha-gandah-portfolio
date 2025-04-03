import { useState } from "react";
import { CategoryFilter } from "./skills/CategoryFilter";
import { SkillCard } from "./skills/SkillCard";
import { skills, categories } from "./skills/skillsData";
import { useSkillAnimation } from "./skills/useSkillAnimation";

export function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  
  // Animation for skill cards - pass activeTab as parameter
  useSkillAnimation(activeTab);

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.categories.includes(activeTab));

  return (
    <section id="skills" className="py-20 bg-slate/5 dark:bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <CategoryFilter 
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
