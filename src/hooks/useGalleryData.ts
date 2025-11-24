import { useState, useEffect } from 'react';
import { type GalleryEntry } from '../types';

const MOCK_DATA: GalleryEntry[] = [
  {
    timestamp: '2024-11-24T10:00:00Z',
    prompt: 'A futuristic cityscape at sunset with flying cars and neon lights',
    news_titles: ['Tech Innovation', 'AI Breakthrough', 'Future of Transport'],
    image_url: 'https://picsum.photos/seed/1/800/600'
  },
  {
    timestamp: '2024-11-23T10:00:00Z',
    prompt: 'Serene mountain landscape with aurora borealis in the sky',
    news_titles: ['Climate News', 'Space Discovery', 'Nature Photography'],
    image_url: 'https://picsum.photos/seed/2/800/600'
  },
  {
    timestamp: '2024-11-22T10:00:00Z',
    prompt: 'Abstract digital art representing global connectivity',
    news_titles: ['Global Economy', 'Digital Transformation', 'Innovation'],
    image_url: 'https://picsum.photos/seed/3/800/600'
  }
];

export const useGalleryData = () => {
  const [images, setImages] = useState<GalleryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // TODO: Sostituisci con il tuo URL R2
        const response = await fetch('YOUR_R2_URL/gallery_data.json');
        const data = await response.json();
        setImages(data.reverse());
      } catch (error) {
        console.error('Error loading gallery:', error);
        setImages(MOCK_DATA);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { images, loading };
};
