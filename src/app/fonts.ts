import { DM_Sans, Noto_Sans_KR } from 'next/font/google';

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--dm-sans',
});
export const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
});
