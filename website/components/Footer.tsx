'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gold-gradient-text mb-4">
              {t('company')}
            </h3>
            <p className="text-gray-400">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[var(--gold-primary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-[var(--gold-primary)] transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-gray-400 hover:text-[var(--gold-primary)] transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[var(--gold-primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@goldencell.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoldenCell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
