
import { TimelineItem } from "./TimelineItem";

export function Education() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <TimelineItem
        title="Bachelor of Science in Computer Science"
        period="Aug 2022 – June 2026"
        organization="Africa University"
        details={[
          "GPA: 3.8/4.0",
          "Coursework: Software Engineering, Database Structures and Algorithms, Object Oriented Programming, Operating Systems, Data Communication and Networking, Artificial Intelligence, Web Development",
          "Member of Google Developers Club and CyberCare AU CyberSecurity Club",
          "Chess Team Captain (2024)"
        ]}
      />
      
      <TimelineItem
        title="Advanced Level"
        period="Jan 2016 – Dec 2021"
        organization="Thornhill High School"
        details={[
          "Advanced Level Results: Pure Mathematics (A), Physics (A), Computer Science (A)",
          "Ordinary Level Results: 10 subjects including Mathematics (A), Computer Science (A), Combined Science (A), Physics (A), and Chemistry (A)"
        ]}
      />
    </div>
  );
}
