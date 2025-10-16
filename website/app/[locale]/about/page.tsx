'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gold-gradient-text mb-6">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-gray-600">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>

          {/* Video Background */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To revolutionize regenerative medicine through cutting-edge exosome therapy, 
              making advanced cellular treatments accessible to everyone seeking to enhance 
              their health and vitality.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
