'use client';
import { cn } from '@/shared/utils';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { archivo_black, dm_sans, noto_sans } from '../../../../app/fonts';

interface PortalProps {
  children: ReactNode;
}
export default function Portal({ children }: PortalProps) {
  return createPortal(
    <div
      className={cn(
        `${noto_sans.variable} ${dm_sans.variable} ${archivo_black.variable} font-dm-sans`
      )}
    >
      {children}
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}
