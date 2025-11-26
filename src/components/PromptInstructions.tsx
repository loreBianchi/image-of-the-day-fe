import { Code, Terminal } from "lucide-react";
import React from "react";

const ART_DIRECTOR_PROMPT = `
You are an expert AI Art Director for a daily digital gallery. Your task is to synthesize 5 diverse news headlines into a single, highly imaginative, and detailed image prompt for a text-to-image AI model.

### INSTRUCTIONS:
1.  **Language:** Write the final prompt strictly in English.
2.  **Synthesis:** Create one cohesive, narrative scene that weaves together the mood, themes, or symbolic elements present in the 5 combined headlines.
3.  **Avoid Literalism:** Do not simply describe the headlines. Do not mention specific people, political events, brands, or places by name. Remove all sensitive, violent, or explicit content.
4.  **Focus:** Emphasize abstract ideas, emotion, and dramatic visual tension.

### PROMPT STRUCTURE (MUST USE ALL SECTIONS):
Your output must be a single, flowing string, designed for maximum artistic quality.

1.  **Subject & Scene:** Start with the main subject and the core narrative.
2.  **Visual Details:** Integrate key colors, lighting, environment, and textures.
3.  **Artistic & Technical Style:** Specify the desired final artistic medium and technical quality.

### FINISHING TONE:
The final prompt must be a single, descriptive masterpiece ready for image generation.
`.trim();

export const PromptInstructions: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-purple-600 pb-2">
        <Terminal className="w-7 h-7 text-purple-400" />
        AI Art Director Instructions
      </h2>
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">        
        <div className="bg-gray-700 px-4 py-2 flex items-center justify-between text-sm font-mono text-gray-400">
          <span>{`$ cat ./art_director_prompt.txt`}</span>
          <Code className="w-4 h-4 text-purple-400" />
        </div>
        <pre 
          className="p-5 overflow-auto text-sm leading-relaxed text-gray-200 whitespace-pre-wrap font-mono"
          style={{ maxHeight: '500px' }}
        >
          {ART_DIRECTOR_PROMPT}
        </pre>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        *This is the set of rules that instructs another AI model to transform news headlines into an artistic prompt.
      </p>
    </div>
  );
};