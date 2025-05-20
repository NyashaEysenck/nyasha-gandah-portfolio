import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileDown } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="text-2xl font-bold text-navy-dark dark:text-white font-mono"
          >
            <span className="text-teal">{"<"}</span>
            Nyasha
            <span className="text-teal">{" />"}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-teal">{index + 1}.</span> {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1rdmeITlWbf4as8IBPXd3p4Pk57JmOBep/view?usp=drivesdk"
              className="flex items-center gap-2 px-4 py-2 rounded-md border-2 border-teal text-teal hover:bg-teal/10 transition-colors duration-200 font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown className="h-4 w-4" />
              Resume
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-navy-dark dark:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-dark shadow-lg animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-lg font-mono border-b border-slate/10 dark:border-slate-dark/30"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-teal">{index + 1}.</span> {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1rdmeITlWbf4as8IBPXd3p4Pk57JmOBep/view?usp=drivesdk"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded-md border-2 border-teal text-teal hover:bg-teal/10 transition-colors duration-200 font-mono"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileDown className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
