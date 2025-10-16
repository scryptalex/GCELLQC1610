'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const videos = [
  '/videos/20251016_0313_01k7n5rr56e39b3m2zha5c78h9.mp4',
  '/videos/20251016_0319_01k7n5rr56e39b3m2zha5c78h9.mp4',
  '/videos/20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4',
  '/videos/20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4',
  '/videos/20251013_1559_01k7etbxf5e8dtz89v7jw3em4w.mp4',
];

export default function VideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Video Display */}
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        {videos.map((video, index) => (
          <motion.div
            key={video}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.95,
            }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              key={`${video}-${index === currentIndex}`}
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((currentIndex - 1 + videos.length) % videos.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % videos.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[var(--gold-primary)] w-8'
                : 'bg-gray-400 w-3 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-4 mt-8">
        {videos.map((video, index) => (
          <motion.button
            key={video}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-4 ring-[var(--gold-primary)]' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className={`absolute inset-0 bg-black transition-opacity ${
              index === currentIndex ? 'opacity-0' : 'opacity-40 hover:opacity-20'
            }`} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
