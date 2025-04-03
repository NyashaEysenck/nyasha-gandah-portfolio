
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6 opacity-0 animate-on-scroll">
            <p className="text-slate-dark dark:text-slate-light">
              Hello! I'm Nyasha, a Computer Science undergraduate with a passion for creating 
              software solutions that make a difference. My journey in tech began with my 
              fascination for problem-solving and logical thinking, leading me to pursue a 
              degree in Computer Science at Africa University.
            </p>
            
            <p className="text-slate-dark dark:text-slate-light">
              Throughout my academic journey, I've maintained a strong 3.8 GPA while delving into 
              various domains within computer science. I'm particularly drawn to the intersection 
              of software development, data science, and machine learning, where I can leverage 
              technology to extract insights and build intelligent applications.
            </p>
            
            <p className="text-slate-dark dark:text-slate-light">
              As a freelance web developer, I've had the opportunity to build and deploy multiple 
              applications, helping university students with their projects while honing my skills 
              in technologies like Flask, Django, React, and Node.js.
            </p>
            
            <p className="text-slate-dark dark:text-slate-light">
              When I'm not coding, you can find me playing chess (proud team captain!), participating 
              in coding challenges, or exploring the latest advancements in AI and machine learning.
            </p>
          </div>
          
          <div className="opacity-0 animate-on-scroll relative">
            <div className="relative rounded-md overflow-hidden group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
                  alt="Coding setup"
                  className="w-full h-auto rounded-md"
                />
                <div className="absolute inset-0 border-4 border-teal rounded-md -m-3 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              </div>
            </div>
            
            <div className="mt-8 bg-navy-light dark:bg-slate-dark p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Education Highlights</h3>
              <ul className="space-y-3 text-slate-light">
                <li className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span>B.Sc. Computer Science - Africa University (3.8/4.0 GPA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span>Advanced Level: Pure Mathematics (A), Physics (A), Computer Science (A)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span>IBM AI Developer Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span>Deep Learning Specialization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span>IBM Machine Learning Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
