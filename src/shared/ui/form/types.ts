import { ReactElement, ReactNode } from 'react';

export interface FormProps {
  onSubmit: (form) => void;
  className?: string;
  children: React.ReactNode;
  methods: unknown;
}
export interface FormContentProps {
  name: string;
  defaultValue?: string;
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
