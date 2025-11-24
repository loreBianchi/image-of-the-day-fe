import { X } from 'lucide-react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

export const Lightbox = ({ imageUrl, onClose }: LightboxProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 hover:bg-white/10 rounded-full"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={imageUrl}
        alt="Full size preview"
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
