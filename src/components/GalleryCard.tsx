import { Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
    >
      {/* Image */}
      <motion.div 
        className="aspect-video overflow-hidden cursor-pointer relative"
        onClick={onImageClick}
        whileHover={{ scale: 1.01 }}
      >
        <motion.img
          src={entry.image_url}
          alt="AI Generated"
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <span className="text-white text-lg font-semibold">Click to preview</span>
        </motion.div>
      </motion.div>

      {/* Info Card */}
      <div className="p-4 space-y-3">
        {/* Date */}
        <div className="flex items-center gap-2 text-purple-300">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(entry.timestamp)}</span>
        </div>

        {/* News Tags */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {entry.news_titles.slice(0, 3).map((title, i) => (
            <motion.span
              key={i}
              className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs truncate max-w-full"
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {title}
            </motion.span>
          ))}
        </motion.div>

        {/* Info Button */}
        <motion.button
          onClick={onInfoClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
        >
          <Info className="w-4 h-4" />
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};
