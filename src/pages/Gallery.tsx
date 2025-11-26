import { Sparkles } from "lucide-react";
import { useState} from "react";
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
  
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Gallery</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((entry, idx) => (
            <GalleryCard
              key={idx}
              entry={entry}
              onImageClick={() => setLightboxImage(entry.image_url)}
              onInfoClick={() => setInfoModalEntry(entry)}
            />
          ))}
        </div>
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
