import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dar-e-Rehmat | A meal, a skill, a way to heal',
  description: 'Dar-e-Rehmat, Rajajang: a free midday meal, a women’s sewing school and medical transport. Demo version.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Noto+Nastaliq+Urdu:wght@400;700&family=Cairo:wght@400;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
