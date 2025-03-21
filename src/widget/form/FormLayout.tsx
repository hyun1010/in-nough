import { Logo } from '@/shared/ui';
import { ReactNode } from 'react';

export function FormLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <Logo />
      {children}
    </div>
  );
}
