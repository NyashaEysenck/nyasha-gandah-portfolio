import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "Full Stack Developer", 
    "Data Scientist", 
    "ML Engineer"
  ];

  // Animation states
  const STATES = {
    TYPING: 'typing',
    DISPLAY: 'display',
    ERASING: 'erasing',
    TRANSITION: 'transition'
  };

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [animationState, setAnimationState] = useState(STATES.TYPING);

  useEffect(() => {
    // Timing constants (in ms)
    const TYPE_SPEED = 100;
    const ERASE_SPEED = 80;
    const DISPLAY_DURATION = 1500;
    const TRANSITION_DURATION = 500;
    
    let timeout;
    
    const currentRole = roles[currentRoleIndex];
    
    switch (animationState) {
      case STATES.TYPING:
        if (displayedRole.length < currentRole.length) {
          // Still typing the current role
          timeout = setTimeout(() => {
            setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          }, TYPE_SPEED);
        } else {
          // Finished typing, move to display state
          setAnimationState(STATES.DISPLAY);
        }
        break;
        
      case STATES.DISPLAY:
        // Display the full role for a fixed duration
        timeout = setTimeout(() => {
          setAnimationState(STATES.ERASING);
        }, DISPLAY_DURATION);
        break;
        
      case STATES.ERASING:
        if (displayedRole.length > 0) {
          // Still erasing the current role
          timeout = setTimeout(() => {
            setDisplayedRole(displayedRole.slice(0, -1));
          }, ERASE_SPEED);
        } else {
          // Finished erasing, move to transition state
          setAnimationState(STATES.TRANSITION);
        }
        break;
        
      case STATES.TRANSITION:
        // Brief pause before starting the next role
        timeout = setTimeout(() => {
          const nextIndex = (currentRoleIndex + 1) % roles.length;
          setCurrentRoleIndex(nextIndex);
          setAnimationState(STATES.TYPING);
        }, TRANSITION_DURATION);
        break;
    }
    
    return () => clearTimeout(timeout);
  }, [animationState, currentRoleIndex, displayedRole, roles]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 animated-gradient">
      <div 
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center opacity-10`}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-teal font-mono mb-5 text-lg">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-navy-dark dark:text-white">
              Nyasha Gandah.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate dark:text-slate-light mb-6">
              I'm a <span className="text-teal inline-block min-w-40">{displayedRole}<span className="animate-pulse">|</span></span>
            </h2>
            <p className="text-lg text-slate dark:text-slate-light max-w-2xl mb-8">
              I'm a Computer Science student passionate about building innovative solutions. 
              From web applications to machine learning models, I love creating technology 
              that solves real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-navy dark:bg-teal text-white dark:text-navy-dark hover:bg-navy-light dark:hover:bg-teal-dark transition-colors duration-200 font-mono"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md border-2 border-teal text-teal hover:bg-teal/10 transition-colors duration-200 font-mono"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-light dark:text-slate">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
