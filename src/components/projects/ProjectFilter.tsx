
import { ProjectCategory } from "./types";

interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  setActiveFilter: (category: ProjectCategory) => void;
  categories: { id: ProjectCategory; name: string }[];
}

export function ProjectFilter({ activeFilter, setActiveFilter, categories }: ProjectFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.id)}
          className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
            activeFilter === category.id
              ? "bg-teal text-navy-dark"
              : "bg-navy-light/30 dark:bg-navy-dark text-slate dark:text-slate-light hover:bg-navy-light hover:dark:bg-navy-light"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
