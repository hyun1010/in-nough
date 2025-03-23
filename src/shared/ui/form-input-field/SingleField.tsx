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
            className="w-full text-body_nomal px-4 h-10"
            placeholder={placeholder}
            readOnly={readOnly}
            errorMessage={errorMessage}
          />
        )}
      />
    </Form.Field>
  );
}
