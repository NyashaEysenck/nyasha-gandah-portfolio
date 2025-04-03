
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Dark humor toast
    if (newTheme === "dark") {
      toast({
        title: "Welcome to the dark side",
        description: "We have cookies... but they're tracking cookies.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Let there be light!",
        description: "Your eyes will thank you... eventually.",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-secondary dark:bg-navy-light hover:bg-muted dark:hover:bg-navy transition-colors duration-200"
      aria-label={theme === "light" ? "Embrace the darkness" : "Return to the light"}
      title={theme === "light" ? "Join the dark side, we have cookies" : "Let there be light"}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
