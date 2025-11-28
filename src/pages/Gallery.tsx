import { Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryCard } from "../components/GalleryCard";
import { InfoModal } from "../components/InfoModal";
import { Lightbox } from "../components/Lightbox";
import type { GalleryEntry } from "../types";
import { useGalleryData } from "../hooks/useGalleryData";
import { Loader } from "../components/Loader";

const Gallery = () => {
  const { images, loading } = useGalleryData();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [infoModalEntry, setInfoModalEntry] = useState<GalleryEntry | null>(null);

  if (loading) {
    return <Loader text="Loading gallery..." />;
  }

  // Variants for grid + stagger items
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Gallery</h2>

      {images.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((entry, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GalleryCard
                entry={entry}
                onImageClick={() => setLightboxImage(entry.image_url)}
                onInfoClick={() => setInfoModalEntry(entry)}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <Sparkles className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          <p className="text-white text-xl">No images yet. Check back soon!</p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

      {/* Info Modal */}
      {infoModalEntry && (
        <InfoModal entry={infoModalEntry} onClose={() => setInfoModalEntry(null)} />
      )}
    </>
  );
};

export default Gallery;
