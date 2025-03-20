'use client';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function FormContent({
  name,
  render,
}: {
  name: string;
  render: ({ field, fieldState, formState }) => ReactElement;
}) {
  const { control } = useFormContext();
  return <Controller name={name} control={control} render={render} />;
}
