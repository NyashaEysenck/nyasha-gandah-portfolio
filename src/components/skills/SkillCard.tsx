
import React from "react";
import { Skill } from "./types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div
      className="skill-card opacity-0 bg-white dark:bg-navy-dark rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border border-slate/10 dark:border-slate-dark/30 hover:border-teal/30 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-teal bg-teal/10 p-3 rounded-full">
          {skill.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-xs font-mono text-teal dark:text-teal-light">{skill.level}</span>
        </div>
      </div>
      
      <p className="text-sm text-slate dark:text-slate-light mt-2 italic">
        {skill.description}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.categories.map(cat => (
          <span
            key={`${skill.name}-${cat}`}
            className="text-xs bg-navy-light/20 dark:bg-navy-light/40 px-2 py-1 rounded-full font-mono"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};
