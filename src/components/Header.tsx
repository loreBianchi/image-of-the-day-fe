import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-purple-900 shadow-lg text-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="text-purple-400 w-6 h-6" />
          <span className="hidden sm:block text-xl font-bold tracking-wider">Image of the Day</span>
        </Link>

        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-purple-400 transition duration-150">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-400 transition duration-150">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Image Of The Day
          </h2>
          <h3 className="text-2xl md:text-3xl text-purple-400 mb-6">
            AI Art, Inspired by News
          </h3>

          <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
            Discover daily AI-generated art inspired by the latest headlines from around the world.
          </p>
        </div>
      </div>
    </header>
  );
};
