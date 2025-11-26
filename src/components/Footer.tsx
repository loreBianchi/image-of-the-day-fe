import { Github, Mail } from "lucide-react";
import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-purple-800 text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Image of the Day</p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/loreBianchi/image-of-the-day-fe" // Sostituisci con il tuo repo
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-purple-400 transition"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5 mr-1" />
              GitHub
            </a>

            <a
              href="mailto:lorebianchi456@gmail.com" // Sostituisci con la tua email
              className="flex items-center hover:text-purple-400 transition"
              aria-label="Contattami via Email"
            >
              <Mail className="w-5 h-5 mr-1" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
