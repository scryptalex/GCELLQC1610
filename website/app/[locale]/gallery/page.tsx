'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

const videos = [
  {
    src: '/videos/19700121_1158_68ebe177fe0481919ef9e77be027ab9d (1).mp4',
    title: 'Exosome Formation',
    description: 'High-resolution visualization of exosome biogenesis and cellular release'
  },
  {
    src: '/videos/20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4',
    title: 'Cellular Communication',
    description: 'Exosomes facilitating intercellular communication and signaling'
  },
  {
    src: '/videos/20251013_1559_01k7etbxf5e8dtz89v7jw3em4w.mp4',
    title: 'Therapeutic Delivery',
    description: 'Targeted delivery of therapeutic molecules via exosomes'
  },
  {
    src: '/videos/20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4',
    title: 'Regenerative Process',
    description: 'Cellular regeneration and tissue repair mechanisms'
  },
  {
    src: '/videos/20251016_0313_01k7n5rr56e39b3m2zha5c78h9.mp4',
    title: 'Advanced Therapy',
    description: 'Next-generation exosome therapy applications'
  },
];

export default function GalleryPage() {
  const t = useTranslations();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gold-gradient-text mb-6">
            {t('nav.gallery')}
          </h1>
          <p className="text-2xl text-gray-600">
            Explore the fascinating world of exosomes
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.src)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold">Click to view</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[var(--gold-primary)] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              className="w-full rounded-lg"
              controls
              autoPlay
              muted
              onClick={(e) => e.stopPropagation()}
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </main>
  );
}
