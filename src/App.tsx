import { useState } from 'react';
import { Header } from './components/Header';
import { GalleryCard } from './components/GalleryCard';
import { Layout } from './components/Layout';
import { Lightbox } from './components/Lightbox';
import { InfoModal } from './components/InfoModal';
import { useGalleryData } from './hooks/useGalleryData';
import { type GalleryEntry } from './types';
import { Sparkles } from 'lucide-react';
import { WorkflowDesc } from './components/WorflowDesc';

function App() {
  const { images, loading } = useGalleryData();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [infoModalEntry, setInfoModalEntry] = useState<GalleryEntry | null>(null);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
            <p className="text-white text-xl">Loading Gallery...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <WorkflowDesc />

      <main className="container mx-auto px-4 pb-16">
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
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox 
          imageUrl={lightboxImage} 
          onClose={() => setLightboxImage(null)} 
        />
      )}

      {/* Info Modal */}
      {infoModalEntry && (
        <InfoModal 
          entry={infoModalEntry} 
          onClose={() => setInfoModalEntry(null)} 
        />
      )}
    </Layout>
  );
}

export default App;
