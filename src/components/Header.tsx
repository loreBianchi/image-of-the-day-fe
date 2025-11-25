import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-purple-400 w-10 h-10" />
          <h1 className="text-5xl font-bold text-white">Image of the Day</h1>
          <Sparkles className="text-purple-400 w-10 h-10" />
        </div>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          AI-generated masterpieces inspired by today's{" "}
          <span className="line-through">most significant</span> random news stories.
        </p>
      </div>
    </header>
  );
};
