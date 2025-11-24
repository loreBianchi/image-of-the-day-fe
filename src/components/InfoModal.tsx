import { X, Sparkles, Calendar, Newspaper } from 'lucide-react';
import { type GalleryEntry } from '../types';

interface InfoModalProps {
  entry: GalleryEntry;
  onClose: () => void;
}

export const InfoModal = ({ entry, onClose }: InfoModalProps) => {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="text-purple-400" />
              Image Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-full"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Preview */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={entry.image_url} 
              alt="Generated image" 
              className="w-full h-auto max-w-[100px] object-cover"
            />
          </div>

          {/* AI Prompt */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Sparkles className="text-purple-400 w-5 h-5" />
              AI Prompt
            </h3>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-purple-200 leading-relaxed">{entry.prompt}</p>
            </div>
          </div>

          {/* News Sources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Newspaper className="text-purple-400 w-5 h-5" />
              News Sources
            </h3>
            <div className="space-y-2">
              {entry.news_titles.map((title, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 bg-slate-900/30 rounded-lg p-3"
                >
                  <span className="text-purple-400 mt-1 text-lg">•</span>
                  <span className="text-gray-300 flex-1">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="border-t border-slate-700 pt-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Generated on {formatDate(entry.timestamp)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
