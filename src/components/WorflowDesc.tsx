import { Rss, Zap, Cloud } from "lucide-react";

export const WorkflowDesc = () => (
  <div className="mb-12 p-6 bg-purple-100 rounded-2xl shadow-xl border border-gray-100">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">How It Works</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Step 1: News ingestion */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-red-100 rounded-full mb-3 shadow-lg">
          <Rss className="text-red-500" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-red-600">1. News Ingestion</h3>
        <p className="text-gray-600 text-sm">
          A scheduled Python job (Cron Job) runs daily, using `feedparser` to collect the latest headlines and articles.
        </p>
      </div>

      {/* Step 2: AI Generation */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-yellow-100 rounded-full mb-3 shadow-lg">
          <Zap className="text-yellow-600" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-yellow-700">2. AI Prompt & Image</h3>
        <p className="text-gray-600 text-sm">
          The AI (Google Gemini) summarizes the news and creates a prompt. An image generation model creates the artwork.
        </p>
      </div>

      {/* Step 3: Serverless Distribution */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-green-100 rounded-full mb-3 shadow-lg">
          <Cloud className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-green-700">3. R2 & React Gallery</h3>
        <p className="text-gray-600 text-sm">
          Images and metadata are saved on Cloudflare R2. The React frontend reads and presents them in real-time.
        </p>
      </div>
    </div>
  </div>
);
