'use client';
import { useFormContext } from 'react-hook-form';
import Form from '../form';
import Select from '../select';
import { OptionType } from '../select/types';

interface SingleFieldProps {
  label?: string;
  name: string;
  options: OptionType[];
  required?: boolean;
  placeholder?: string;
}
export default function SelectFilterField({
  label,
  name,
  options,
  required,
  placeholder,
}: SingleFieldProps) {
  const { setValue } = useFormContext();

  const handleSelect = (value: string | number) => {
    setValue(name, value);
  };

  return (
    <Form.Field>
      {label && <Form.Label required={required}>{label}</Form.Label>}
      <Form.Content
        name={name}
        render={({ field }) => {
          return (
            <Select.Filter
              {...field}
              selected={field.value}
              placeholder={placeholder}
              onSelect={handleSelect}
              options={options}
            />
          );
        }}
      />
    </Form.Field>
  );
}
