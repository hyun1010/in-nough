'use client';
import { cn } from '@/shared/utils';
import { FormProvider, useForm } from 'react-hook-form';
import { FormProps } from './types';

export default function InternalForm({
  onSubmit,
  className,
  children,
  formOptions = {},
}: FormProps) {
  const methods = useForm(formOptions);
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
