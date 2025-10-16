'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResearchPage() {
  const t = useTranslations();

  const publications = [
    {
      year: '2024',
      title: 'Advanced Exosome Characterization in Regenerative Medicine',
      journal: 'Journal of Cellular Therapy',
      authors: 'GoldenCell Research Team'
    },
    {
      year: '2024',
      title: 'Clinical Applications of Exosome-Based Therapies',
      journal: 'International Journal of Regenerative Medicine',
      authors: 'GoldenCell Scientific Advisory Board'
    },
    {
      year: '2023',
      title: 'Safety and Efficacy of Exosome Treatments',
      journal: 'Medical Research Quarterly',
      authors: 'GoldenCell Clinical Research Division'
    }
  ];

  const partnerships = [
    {
      name: 'Leading University Medical Center',
      focus: 'Clinical trials and research'
    },
    {
      name: 'International Research Institute',
      focus: 'Exosome characterization studies'
    },
    {
      name: 'Biotech Innovation Lab',
      focus: 'Technology development'
    }
  ];

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
            {t('research.title')}
          </h1>
          <p className="text-2xl text-gray-600">
            {t('research.subtitle')}
          </p>
        </motion.div>

        {/* Hero Video */}
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
            <source src="/videos/20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Advancing Science</h2>
              <p className="text-xl">Pioneering research in exosome therapy and regenerative medicine</p>
            </div>
          </div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔬',
                title: 'Basic Science',
                description: 'Understanding exosome biology and mechanisms of action'
              },
              {
                icon: '🧪',
                title: 'Clinical Research',
                description: 'Safety and efficacy studies in human applications'
              },
              {
                icon: '💊',
                title: 'Therapeutic Development',
                description: 'Creating next-generation exosome-based treatments'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--platinum-light)] rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-l-4 border-[var(--gold-primary)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block px-3 py-1 bg-[var(--gold-primary)] text-white rounded-full text-sm font-bold">
                      {pub.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-1">{pub.journal}</p>
                    <p className="text-gray-500 text-sm">{pub.authors}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Research Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[var(--platinum-light)] to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Research Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about our research initiatives?
          </p>
          <Link href="/contact" className="inline-block bg-white text-[var(--gold-dark)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
