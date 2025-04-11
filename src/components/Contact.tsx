
import { Github, Linkedin, ExternalLink, Mail, PhoneCall } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-dark dark:text-slate-light mb-8">
              I'm currently looking for internship or entry-level opportunities in software development, 
              data science, or machine learning. Whether you have a question, a project idea, or just 
              want to connect, feel free to reach out to me.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ngandah@gmail.com" className="contact-link">
                <div className="bg-teal/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-teal" />
                </div>
                <span>ngandah@gmail.com</span>
              </a>
              
              <a href="tel:+263781358893" className="contact-link">
                <div className="bg-teal/10 p-3 rounded-full">
                  <PhoneCall className="h-5 w-5 text-teal" />
                </div>
                <span>+263781358893</span>
              </a>
              
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://github.com/NyashaEysenck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy dark:bg-teal p-3 rounded-full text-white dark:text-navy-dark hover:bg-navy-light dark:hover:bg-teal-dark transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/nyasha-gandah-8997b8311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy dark:bg-teal p-3 rounded-full text-white dark:text-navy-dark hover:bg-navy-light dark:hover:bg-teal-dark transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                
                <a
                  href="https://leetcode.com/u/erax1BH4xJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy dark:bg-teal p-3 rounded-full text-white dark:text-navy-dark hover:bg-navy-light dark:hover:bg-teal-dark transition-colors duration-200"
                  aria-label="LeetCode Profile"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
                
                <a
                  href="https://www.coursera.org/account-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy dark:bg-teal p-3 rounded-full text-white dark:text-navy-dark hover:bg-navy-light dark:hover:bg-teal-dark transition-colors duration-200"
                  aria-label="Coursera Profile"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg lg:h-[400px]">
            <div className="absolute inset-0 animated-gradient rounded-lg opacity-80"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">Languages</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal"></span>
                  <span>English (Fluent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal"></span>
                  <span>Shona (Native)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal"></span>
                  <span>Portuguese (Intermediate)</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">Available for</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Internships
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Entry-level Positions
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Freelance Projects
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Remote Work
                  </span>
                </div>
              </div>
              
              <div className="mt-auto">
                <a
                  href="https://drive.google.com/file/d/1FZIWPjYKPe8m0w_xV7VBDViEJPDQpsga/view?usp=sharing"
                  className="inline-block mt-6 px-6 py-3 bg-teal text-navy-dark rounded-md hover:bg-teal-dark transition-colors duration-200 font-mono"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
