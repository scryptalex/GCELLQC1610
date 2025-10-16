import { locales } from '../i18n';

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
