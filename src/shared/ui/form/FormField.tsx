'use client';
import { cn } from '@/shared/utils';
import { ReactNode } from 'react';

export default function FormField({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('mb-6 flex flex-col gap-2', className)}>{children}</div>
  );
}
