'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FormContentProps } from './types';

export default function FormContent({ name, render }: FormContentProps) {
  const { control } = useFormContext();
  return <Controller name={name} control={control} render={render} />;
}
