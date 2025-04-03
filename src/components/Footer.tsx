
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-navy-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold font-mono">
              <span className="text-teal">{"<"}</span>
                Nyasha
              <span className="text-teal">{" />"}</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-slate-light text-sm mb-2">
              Built with <Heart className="inline-block h-4 w-4 text-teal" fill="currentColor" /> by Nyasha Gandah
            </p>
            <p className="text-slate-light text-xs">
              © {new Date().getFullYear()} All rights reserved. No bugs were harmed in the making of this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
