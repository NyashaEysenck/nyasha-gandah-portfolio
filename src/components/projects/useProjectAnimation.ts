
import { useState, useEffect } from "react";
import { Project, ProjectCategory } from "./types";

export function useProjectAnimation(projects: Project[], activeFilter: ProjectCategory) {
  const [animatedItems, setAnimatedItems] = useState<string[]>([]);
  
  useEffect(() => {
    // Reset animation state when filter changes
    setAnimatedItems([]);
    
    const filteredProjects = activeFilter === "all"
      ? projects
      : projects.filter(project => project.categories.includes(activeFilter));
    
    // Animate items sequentially
    let timeout: NodeJS.Timeout;
    filteredProjects.forEach((project, index) => {
      timeout = setTimeout(() => {
        setAnimatedItems(prev => [...prev, project.id]);
      }, index * 100);
    });
    
    return () => clearTimeout(timeout);
  }, [activeFilter, projects]);

  return animatedItems;
}
