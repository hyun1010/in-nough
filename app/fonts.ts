import { Archivo_Black, DM_Sans, Noto_Sans_KR } from 'next/font/google';

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans',
});
export const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
});
export const archivo_black = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--archivo-black',
});
