import { ExternalLink, Github } from "lucide-react";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
}

export function ProjectCard({ project, isAnimated }: ProjectCardProps) {
  return (
    <div
      className={`project-card opacity-0 transition-all duration-500 ${
        isAnimated ? "opacity-100 translate-y-0" : "translate-y-8"
      }`}
    >
      <div className="relative overflow-hidden h-48 rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.status === "ongoing" && (
          <div className="absolute top-4 right-4 bg-teal/90 text-navy-dark font-mono text-xs px-3 py-1 rounded-full animate-pulse">
            In Progress
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-4">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-white font-bold truncate">{project.title}</h3>
            <div className="text-white bg-teal/20 p-2 rounded-full">
              {project.icon}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-dark dark:text-slate-light mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block tech-pill"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-block tech-pill">+{project.tags.length - 4}</span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-dark dark:text-slate-light hover:text-teal transition-colors px-3 py-1 rounded-md border border-slate-dark/40 dark:border-slate-light/40"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
          ) : (
            <span className="text-sm font-mono text-slate-dark/50 dark:text-slate-light/50 px-3 py-1 border border-slate-dark/20 dark:border-slate-light/20 rounded-md">
              Soon
            </span>
          )}
          
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-dark dark:text-slate-light hover:text-teal transition-colors px-3 py-1 rounded-md border border-slate-dark/40 dark:border-slate-light/40"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="text-sm font-mono">Live Demo</span>
            </a>
          )}
          
          {/* TODO: Implement project details modal */}
        </div>
      </div>
    </div>
  );
}
