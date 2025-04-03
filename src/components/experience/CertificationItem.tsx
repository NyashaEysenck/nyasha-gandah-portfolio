
import { Calendar, ExternalLink } from "lucide-react";

interface CertificationItemProps {
  title: string;
  period: string;
  organization: string;
  description: string;
  verificationUrl: string;
}

export function CertificationItem({ 
  title, 
  period, 
  organization, 
  description, 
  verificationUrl 
}: CertificationItemProps) {
  return (
    <div className="timeline-item">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-teal flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> {period}
        </span>
      </div>
      <p className="text-slate-dark dark:text-slate-light mb-4">{organization}</p>
      <p className="text-slate-dark dark:text-slate-light mb-2">
        {description}
      </p>
      <a 
        href={verificationUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-teal hover:underline text-sm"
      >
        Verify Certification <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </div>
  );
}
