import { Rss, Zap, Cloud, Github } from "lucide-react";

export const WorkflowDesc = () => (
  <div className="mb-12 p-8 bg-purple-100/70 rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
      How It Works
    </h2>

    {/* NEW: GitHub Actions description */}
    <p className="text-center text-gray-700 mb-8">
      A daily GitHub Actions workflow triggers the full pipeline, automating news ingestion, AI processing, and publishing.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Step 1 */}
      <div className="flex flex-col items-center transition-transform hover:scale-105">
        <div className="p-4 bg-red-100 rounded-full mb-3 shadow-md">
          <Rss className="text-red-500" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-red-600">1. News Ingestion</h3>
        <p className="text-gray-700 text-sm">
          A Python script uses <code>feedparser</code> to fetch and parse the latest news articles.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center transition-transform hover:scale-105">
        <div className="p-4 bg-yellow-100 rounded-full mb-3 shadow-md">
          <Zap className="text-yellow-600" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-yellow-700">2. AI Prompt & Image</h3>
        <p className="text-gray-700 text-sm">
          Google Gemini summarizes the articles and generates a creative prompt. An AI image model produces the artwork.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center transition-transform hover:scale-105">
        <div className="p-4 bg-green-100 rounded-full mb-3 shadow-md">
          <Cloud className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-green-700">3. R2 & React Gallery</h3>
        <p className="text-gray-700 text-sm">
          The generated images and metadata are stored on Cloudflare R2. The React app fetches and displays them dynamically.
        </p>
      </div>
    </div>

    {/* GitHub Repo Button */}
    <div className="flex justify-center mt-10">
      <a
        href="https://github.com/loreBianchi/image-of-the-day"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  </div>
);
