import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SHOPPABLE_VIDEOS, ShoppableVideo } from '../data/videos';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShoppingBag,
  ArrowRight,
  X,
  Sparkles,
  Maximize2
} from 'lucide-react';

export const ShoppableReelsSection: React.FC = () => {
  const { addToCart } = useCart();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<ShoppableVideo | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (reel: ShoppableVideo) => {
    setSelectedVideo(reel);
    setIsLightboxOpen(true);
    setIsPlaying(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedVideo(null);
  };

  const toggleLightboxPlay = () => {
    if (!lightboxVideoRef.current) return;
    if (lightboxVideoRef.current.paused) {
      lightboxVideoRef.current.play();
      setIsPlaying(true);
    } else {
      lightboxVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleLightboxMute = () => {
    if (!lightboxVideoRef.current) return;
    lightboxVideoRef.current.muted = !lightboxVideoRef.current.muted;
    setIsMuted(lightboxVideoRef.current.muted);
  };

  const handleReelAddToCart = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      addToCart(product, 1);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F9F7F2] border-t border-[#061507]/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
            Jewellery in Motion • दृश्य संग्रह
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507]">
            See It. Love It. Wear It.
          </h2>
          <p className="text-sm text-[#637066] font-light">
            Explore our jewellery in motion. Tap any clip to shop the featured brass pieces.
          </p>
        </div>

        {/* 9:16 Video Cards Carousel / Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-6 sm:pb-0 scrollbar-none snap-x snap-mandatory">
          {SHOPPABLE_VIDEOS.map((reel) => {
            const isHovered = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                onMouseEnter={() => setActiveVideoId(reel.id)}
                onMouseLeave={() => setActiveVideoId(null)}
                className="group relative flex-shrink-0 w-[260px] sm:w-auto aspect-[9/16] rounded-2xl overflow-hidden bg-[#061507] shadow-card-soft hover:shadow-card-hover transition-all duration-300 border border-[#061507]/10 snap-center flex flex-col justify-between"
              >
                {/* Background Video / Poster */}
                <div
                  onClick={() => openLightbox(reel)}
                  className="absolute inset-0 cursor-pointer overflow-hidden"
                >
                  <img
                    src={reel.posterUrl}
                    alt={reel.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#C39C69] group-hover:border-[#C39C69] group-hover:text-[#061507] transition-all">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-4 flex justify-between items-center pointer-events-none">
                  <span className="px-2.5 py-1 rounded-sm text-[10px] uppercase font-mono tracking-wider font-semibold bg-[#061507]/80 backdrop-blur text-[#D7AD76] border border-[#C39C69]/30">
                    {reel.tag}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                    {reel.duration}
                  </span>
                </div>

                {/* Bottom Shoppable Card Overlay */}
                <div className="relative z-10 p-4 space-y-3">
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium leading-snug">
                      {reel.productName}
                    </h3>
                    <p className="text-sm font-semibold text-[#D7AD76] font-serif">
                      ₹{reel.productPrice.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      to={`/product/${reel.productId}`}
                      className="flex-1 py-2 px-3 rounded text-[11px] font-semibold uppercase tracking-wider bg-white/95 text-[#061507] hover:bg-white text-center transition-colors"
                    >
                      View Piece
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReelAddToCart(reel.productId);
                      }}
                      className="p-2 rounded bg-[#061507] text-[#D7AD76] hover:bg-[#C39C69] hover:text-[#061507] border border-[#C39C69]/40 transition-colors"
                      title="Add to Shopping Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enlarged Video Lightbox Modal */}
      {isLightboxOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[88vh] bg-[#061507] rounded-3xl overflow-hidden shadow-2xl border border-[#C39C69]/30 flex flex-col justify-between">
            
            {/* Top Close & Mute Controls */}
            <div className="relative z-20 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
              <span className="text-xs text-[#D7AD76] uppercase tracking-wider font-mono">
                {selectedVideo.tag}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLightboxMute}
                  className="p-2 rounded-full bg-black/50 text-white hover:text-[#D7AD76]"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-black/50 text-white hover:text-[#D7AD76]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div
              onClick={toggleLightboxPlay}
              className="absolute inset-0 cursor-pointer"
            >
              <video
                ref={lightboxVideoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.posterUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full bg-[#061507]/80 text-[#D7AD76] flex items-center justify-center border border-[#C39C69]">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Shoppable Product Bar */}
            <div className="relative z-20 p-6 bg-gradient-to-t from-[#061507] via-[#061507]/90 to-transparent space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={selectedVideo.productImage}
                  alt={selectedVideo.productName}
                  className="w-14 h-14 rounded-lg object-cover border border-[#C39C69]/40 bg-[#061507]"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-lg text-white truncate">
                    {selectedVideo.productName}
                  </h4>
                  <p className="text-base font-semibold text-[#D7AD76] font-serif">
                    ₹{selectedVideo.productPrice.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/product/${selectedVideo.productId}`}
                  onClick={closeLightbox}
                  className="flex-1 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-white text-[#061507] hover:bg-[#F9F7F2] text-center"
                >
                  View Product Page
                </Link>
                <button
                  onClick={() => {
                    handleReelAddToCart(selectedVideo.productId);
                    closeLightbox();
                  }}
                  className="btn-primary py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 border border-[#C39C69]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
