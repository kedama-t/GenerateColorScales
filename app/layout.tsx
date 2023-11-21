import ThemeChanger from './components/ThemeChanger';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spread Colors',
  description: 'For Tailwind CSS Color theme.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ThemeChanger>{children}</ThemeChanger>
      </body>
    </html>
  );
}
