'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FormContentProps } from './types';

export default function FormContent({
  name,
  defaultValue,
  render,
}: FormContentProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={defaultValue ?? control[name]}
      control={control}
      render={render}
    />
  );
}
