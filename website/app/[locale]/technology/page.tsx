'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TechnologyPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const technologies = [
    {
      key: 'tech1',
      features: ['feature1', 'feature2', 'feature3', 'feature4']
    },
    {
      key: 'tech2',
      features: ['feature1', 'feature2', 'feature3', 'feature4']
    },
    {
      key: 'tech3',
      features: ['feature1', 'feature2', 'feature3', 'feature4']
    }
  ];

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
            {t('technology.title')}
          </h1>
          <p className="text-2xl text-gray-600">
            {t('technology.subtitle')}
          </p>
        </motion.div>

        {/* Video Background Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/20251013_1559_01k7etbxf5e8dtz89v7jw3em4w.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="max-w-2xl px-8 md:px-12 text-white">
              <h2 className="text-4xl font-bold mb-4">{t('technology.videoSection.title')}</h2>
              <p className="text-xl">
                {t('technology.videoSection.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technology Cards */}
        <div className="space-y-12 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t(`technology.${tech.key}.title`)}</h3>
                  <p className="text-lg text-gray-600 mb-6">{t(`technology.${tech.key}.description`)}</p>
                  <ul className="space-y-3">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="w-6 h-6 text-[var(--gold-primary)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{t(`technology.${tech.key}.${feature}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)] p-8 md:p-12 flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-4">0{index + 1}</div>
                    <div className="text-xl font-semibold">Technology Platform</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[var(--platinum-light)] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{t('technology.cta.title')}</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('technology.cta.description')}
          </p>
          <button
            onClick={() => router.push(`/${locale}/contact`)}
            className="inline-block bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          >
            {t('technology.cta.button')}
          </button>
        </motion.div>
      </div>
    </main>
  );
}
