
import { ReactNode } from "react";

interface ExperienceTabProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function ExperienceTab({ icon, label, isActive, onClick }: ExperienceTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-md font-mono text-left whitespace-nowrap transition-all duration-300 ${
        isActive
          ? "bg-teal/10 border-l-4 border-teal text-teal"
          : "hover:bg-slate/10 dark:hover:bg-navy-dark text-slate-dark dark:text-slate-light"
      }`}
    >
      {icon} {label}
    </button>
  );
}
