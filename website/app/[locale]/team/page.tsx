'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamPage() {
  const t = useTranslations();

  const teamMembers = [
    {
      key: 'member1',
      image: '/images/team/chun-hun.png',
      name: t('team.member1.name'),
      position: t('team.member1.position'),
      bio: t('team.member1.bio'),
      expertise: t('team.member1.expertise')
    },
    {
      key: 'member2',
      image: '/images/team/chulgi-min.png',
      name: t('team.member2.name'),
      position: t('team.member2.position'),
      bio: t('team.member2.bio'),
      expertise: t('team.member2.expertise')
    },
    {
      key: 'member3',
      image: '/images/team/shulyak.png',
      name: t('team.member3.name'),
      position: t('team.member3.position'),
      bio: t('team.member3.bio'),
      expertise: t('team.member3.expertise')
    },
    {
      key: 'member4',
      image: '/images/team/grushin.png',
      name: t('team.member4.name'),
      position: t('team.member4.position'),
      bio: t('team.member4.bio'),
      expertise: t('team.member4.expertise')
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
            {t('team.title')}
          </h1>
          <p className="text-2xl text-gray-600">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--platinum-light)] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] text-white rounded-full text-sm font-semibold mb-4 self-start">
                    {member.position}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[var(--gold-primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="font-medium">{member.expertise}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/20251016_0319_01k7n5rr56e39b3m2zha5c78h9.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Working Together for Excellence</h2>
              <p className="text-xl">Our team is dedicated to advancing exosome therapy and improving patient outcomes worldwide.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Publications</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Clinical Trials</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">Patients Treated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
