import { useEffect } from "react";

export const useSkillAnimation = (activeTab: string) => {
  useEffect(() => {
    // Reset animation classes when tab changes
    const elements = document.querySelectorAll(".skill-card");
    elements.forEach((el) => {
      el.classList.remove("animate-fadeIn");
      el.classList.add("opacity-0");
    });

    // Set up the observer to add animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("animate-fadeIn");
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all skill cards
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeTab]); // Re-run effect when activeTab changes
};
