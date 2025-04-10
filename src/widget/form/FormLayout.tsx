import { Logo } from '@/shared/ui';
import { ReactNode } from 'react';

export function FormLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen min-h-fit w-full flex-col items-center justify-center bg-white p-10">
      <Logo prevent />
      {children}
    </div>
  );
}
