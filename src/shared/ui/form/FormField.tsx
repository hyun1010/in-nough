'use client';
import { cn } from '@/shared/utils';
import { FormFieldProps } from './types';

export default function FormField({ className, children }: FormFieldProps) {
  return (
    <div className={cn('mb-6 flex flex-col gap-2', className)}>{children}</div>
  );
}
