import type { Metadata } from 'next';
import { dm_sans, noto_sans } from './fonts';
import './globals.css';
import QueryProvider from './provider';

export const metadata: Metadata = {
  title: '이너-프',
  description: '이너-프',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        lang="en"
        className={`${noto_sans.variable} ${dm_sans.variable} font-dm-sans`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
