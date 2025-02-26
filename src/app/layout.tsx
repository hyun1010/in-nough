import type { Metadata } from 'next';
import { DM_Sans, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--dm-sans',
});
const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
});

export const metadata: Metadata = {
  title: 'example',
  description: 'example',
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
        {children}
      </body>
    </html>
  );
}
