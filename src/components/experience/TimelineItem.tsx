
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  period: string;
  organization: string;
  details: string[];
}

export function TimelineItem({ title, period, organization, details }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-teal flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> {period}
        </span>
      </div>
      <p className="text-slate-dark dark:text-slate-light mb-4">{organization}</p>
      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal mr-2">▹</span>
            <span className="text-slate-dark dark:text-slate-light">
              {detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
