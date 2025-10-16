'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VideoHero from '@/components/VideoHero';
import VideoSlideshow from '@/components/VideoSlideshow';
import TechnologySection from '@/components/TechnologySection';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Video */}
      <VideoHero />

      {/* Video Slideshow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
          <VideoSlideshow />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--platinum-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('about.mission')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <TechnologySection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover the power of exosome therapy and unlock your body's potential for healing and regeneration.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[var(--gold-dark)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              {t('contact.cta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
