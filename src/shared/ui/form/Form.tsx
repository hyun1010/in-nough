'use client';
import { cn } from '@/shared/utils';
import { FormProvider } from 'react-hook-form';
export default function InternalForm({
  onSubmit,
  className,
  children,
  methods,
}) {
  return (
    <FormProvider {...methods}>
      <form
        className={cn('bg-white w-full h-full', className)}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
