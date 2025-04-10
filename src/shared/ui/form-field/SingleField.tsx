'use client';
import { HTMLInputTypeAttribute } from 'react';
import Form from '../form';
import Input from '../input';

interface SingleFieldProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  errorMessage?: string;
}
export default function SingleField({
  type,
  label,
  name,
  required,
  readOnly,
  errorMessage,
  placeholder,
}: SingleFieldProps) {
  return (
    <Form.Field>
      {label && <Form.Label required={required}>{label}</Form.Label>}
      <Form.Content
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            className="h-10 w-full px-4 text-body_nomal"
            placeholder={placeholder}
            readOnly={readOnly}
            errorMessage={errorMessage}
          />
        )}
      />
    </Form.Field>
  );
}
