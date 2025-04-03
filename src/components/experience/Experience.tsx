
import { useState } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { ExperienceTab } from "./ExperienceTab";

export function Experience() {
  const [activeTab, setActiveTab] = useState("work");
  
  return (
    <section id="experience" className="py-20 bg-slate/5 dark:bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 mb-8 lg:mb-0 overflow-x-auto lg:overflow-visible">
              <ExperienceTab 
                icon={<Briefcase className="h-5 w-5" />} 
                label="Work" 
                isActive={activeTab === "work"} 
                onClick={() => setActiveTab("work")} 
              />
              
              <ExperienceTab 
                icon={<GraduationCap className="h-5 w-5" />} 
                label="Education" 
                isActive={activeTab === "education"} 
                onClick={() => setActiveTab("education")} 
              />
              
              <ExperienceTab 
                icon={<Award className="h-5 w-5" />} 
                label="Certifications" 
                isActive={activeTab === "certifications"} 
                onClick={() => setActiveTab("certifications")} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-9">
            {activeTab === "work" && <WorkExperience />}
            {activeTab === "education" && <Education />}
            {activeTab === "certifications" && <Certifications />}
          </div>
        </div>
      </div>
    </section>
  );
}
