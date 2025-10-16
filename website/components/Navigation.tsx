'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'technology', href: '/technology' },
    { key: 'treatments', href: '/treatments' },
    { key: 'research', href: '/research' },
    { key: 'team', href: '/team' },
    { key: 'gallery', href: '/gallery' },
    { key: 'contact', href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'ko', name: 'KO' },
  ];

  const switchLocale = (newLocale: string) => {
    // Remove locale prefix from current path
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
    const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
    return `/${newLocale}${cleanPath}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--platinum)]/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-4 group">
            <div className="relative w-60 h-60 md:w-72 md:h-72 filter drop-shadow-lg">
              <Image
                src="/images/logo.png"
                alt="GoldenCell Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(1.2) saturate(1.5) hue-rotate(-10deg)' }}
                priority
              />
            </div>
            <span className="text-3xl md:text-4xl font-bold gold-gradient-text group-hover:scale-105 transition-transform duration-300">
              GoldenCell
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const href = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
              return (
                <button
                  key={item.key}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(href);
                  }}
                  className="text-gray-700 hover:text-[var(--gold-primary)] transition-colors duration-200 font-medium cursor-pointer"
                >
                  {t(item.key as any)}
                </button>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={switchLocale(lang.code)}
                className={`px-3 py-1 rounded ${
                  locale === lang.code
                    ? 'bg-[var(--gold-primary)] text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                {lang.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const href = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
              return (
                <button
                  key={item.key}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    router.push(href);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-[var(--gold-primary)] py-2 cursor-pointer"
                >
                  {t(item.key as any)}
                </button>
              );
            })}
            <div className="flex space-x-2 pt-4 border-t">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={switchLocale(lang.code)}
                  className={`px-3 py-1 rounded ${
                    locale === lang.code
                      ? 'bg-[var(--gold-primary)] text-white'
                      : 'text-gray-700 bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
