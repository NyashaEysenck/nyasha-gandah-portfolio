
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: string;
  description: string;
  categories: string[];
  icon: JSX.Element;
}

export interface SkillCategory {
  id: string;
  name: string;
}
