import ThemeSwitcher from './components/ThemeSwitcher';
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
        <ThemeSwitcher>{children}</ThemeSwitcher>
      </body>
    </html>
  );
}
