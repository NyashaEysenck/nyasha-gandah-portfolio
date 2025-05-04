import { Calendar } from "lucide-react";
import { TimelineItem } from "./TimelineItem";

export function WorkExperience() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <TimelineItem
        title="Freelance Developer"
        period="Feb 2024 – Present"
        organization="Self-Employed"
        details={[
          "Developed and deployed 5+ web applications per semester using Flask, Django, React, and Node.js, assisting university students in meeting project requirements.",
          "Built an AI-powered career guidance tool leveraging Large Language Models (LLMs) to provide personalized career recommendations.",
          "Created a fuzzy logic-based diagnostic system to assess Polycystic Ovary Syndrome (PCOS) risk from user-submitted health data.",
          "Streamlined development processes, reducing project completion time by 30% through efficient coding practices and reusable components.",
          "Delivered high-quality, user-friendly web apps, contributing to students achieving an average of 85% on their final project evaluations.",
          "Provided one-on-one mentorship and code reviews, contributing to a 90% project success rate."
        ]}
      />
    </div>
  );
}