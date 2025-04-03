
import React from "react";
import { SkillCategory } from "./types";

interface CategoryFilterProps {
  categories: SkillCategory[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
            activeTab === category.id
              ? "bg-teal text-navy-dark"
              : "bg-navy-light/30 dark:bg-navy text-slate dark:text-slate-light hover:bg-navy-light hover:dark:bg-navy-light"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
