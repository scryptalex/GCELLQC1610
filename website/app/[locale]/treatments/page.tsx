'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TreatmentsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const treatments = [
    {
      key: 'antiAging',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
      video: '/videos/20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4'
    },
    {
      key: 'regenerative',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
      video: '/videos/20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4'
    },
    {
      key: 'immune',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
      video: '/videos/20251016_0313_01k7n5rr56e39b3m2zha5c78h9.mp4'
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
            {t('treatments.title')}
          </h1>
          <p className="text-2xl text-gray-600">
            {t('treatments.subtitle')}
          </p>
        </motion.div>

        {/* Treatments List */}
        <div className="space-y-16">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--platinum-light)] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video Side */}
                <div className="relative h-80 lg:h-auto">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={treatment.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--platinum-light)] lg:hidden" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] text-white rounded-full text-sm font-semibold mb-4 self-start">
                    Treatment {index + 1}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t(`treatments.${treatment.key}.title`)}</h2>
                  <p className="text-lg text-gray-600 mb-6">{t(`treatments.${treatment.key}.description`)}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('treatments.benefitsTitle')}</h3>
                  <ul className="space-y-3 mb-8">
                    {treatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <svg className="w-6 h-6 text-[var(--gold-primary)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{t(`treatments.${treatment.key}.${benefit}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => router.push(`/${locale}/contact`)}
                    className="inline-block bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                  >
                    {t('treatments.learnMore')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">{t('treatments.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', key: 'step1' },
              { step: '02', key: 'step2' },
              { step: '03', key: 'step3' },
              { step: '04', key: 'step4' }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`treatments.process.${item.key}.title`)}</h3>
                <p className="text-gray-600">{t(`treatments.process.${item.key}.description`)}</p>
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
          className="mt-16 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-primary)] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">{t('treatments.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('treatments.cta.description')}
          </p>
          <button
            onClick={() => router.push(`/${locale}/contact`)}
            className="inline-block bg-white text-[var(--gold-dark)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            {t('treatments.cta.button')}
          </button>
        </motion.div>
      </div>
    </main>
  );
}
