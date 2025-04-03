
import { ReactNode } from "react";

export type ProjectCategory = "all" | "web" | "ml" | "data" | "ai";

export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
  links: ProjectLink;
  icon: ReactNode;
  status: "completed" | "ongoing";
}
