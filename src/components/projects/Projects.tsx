
import { useState } from "react";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectCard } from "./ProjectCard";
import { useProjectAnimation } from "./useProjectAnimation";
import { projects, categories } from "./projectsData";
import { ProjectCategory } from "./types";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const animatedItems = useProjectAnimation(projects, activeFilter);

  const filteredProjects = activeFilter === "all"
    ? projects // Projects are already sorted in projectsData.tsx with ongoing first
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Featured Projects</h2>
        
        <ProjectFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          categories={categories} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              isAnimated={animatedItems.includes(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
