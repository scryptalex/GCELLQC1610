'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--platinum-light)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full flex items-center justify-center"
        >
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-2xl font-bold gold-gradient-text"
        >
          GoldenCell
        </motion.h2>
        <p className="text-gray-600 mt-2">Loading...</p>
      </motion.div>
    </div>
  );
}
