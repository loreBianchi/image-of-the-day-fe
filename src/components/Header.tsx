import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-purple-900 shadow-lg text-white">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <Sparkles className="text-purple-400 w-6 h-6" />
          <h1 className="text-xl font-bold tracking-wider">
            <Link to="/">Image of the Day</Link>
          </h1>
        </div>

        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link 
                to="/" 
                className="hover:text-purple-400 transition duration-150"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-purple-400 transition duration-150"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            AI Art, Inspired by News
          </h2>
          
          <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
            Discover daily AI-generated art inspired by the latest headlines from around the world.
          </p>
        </div>
      </div>
      
    </header>
  );
};