import { Calendar, Info } from 'lucide-react';
import { type GalleryEntry } from '../types';

interface GalleryCardProps {
  entry: GalleryEntry;
  onImageClick: () => void;
  onInfoClick: () => void;
}

export const GalleryCard = ({ entry, onImageClick, onInfoClick }: GalleryCardProps) => {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
      {/* Image - Click per preview */}
      <div 
        className="aspect-video overflow-hidden cursor-pointer relative"
        onClick={onImageClick}
      >
        <img
          src={entry.image_url}
          alt="AI Generated"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Click to preview</span>
        </div>
      </div>

      {/* Info Card */}
      <div className="p-4 space-y-3">
        {/* Date */}
        <div className="flex items-center gap-2 text-purple-300">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(entry.timestamp)}</span>
        </div>

        {/* News Tags */}
        <div className="flex flex-wrap gap-2">
          {entry.news_titles.slice(0, 3).map((title, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs truncate max-w-full"
            >
              {title}
            </span>
          ))}
        </div>

        {/* Info Button */}
        <button
          onClick={onInfoClick}
          className="w-full py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
        >
          <Info className="w-4 h-4" />
          View Details
        </button>
      </div>
    </div>
  );
};
