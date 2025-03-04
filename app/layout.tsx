import type { Metadata } from 'next';
import { dm_sans, noto_sans } from './fonts';
import './globals.css';
import Provider from './provider';

export const metadata: Metadata = {
  title: '이너-프',
  description: '이너-프',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        lang="en"
        className={`${noto_sans.variable} ${dm_sans.variable} font-dm-sans`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
