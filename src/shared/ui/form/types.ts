import { ReactElement, ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form';

export interface FormProps {
  onSubmit: (form) => void;
  className?: string;
  children: React.ReactNode;
  formOptions?: UseFormProps;
}

export interface FormContentProps {
  name: string;
  render: ({ field, fieldState, formState }) => ReactElement;
}

export interface FormLabelProps {
  required?: boolean;
  children: ReactNode;
}

export interface FormFieldProps {
  className?: string;
  children: ReactNode;
}
