import Form from '../form';
import Input from '../input';

interface SingleFieldProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}
export default function SingleField({
  label,
  name,
  required,
  placeholder,
}: SingleFieldProps) {
  return (
    <Form.Field>
      <Form.Label required={required}>{label}</Form.Label>
      <Form.Content
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            className="bg-white w-full text-body_nomal px-4 h-10"
            placeholder={placeholder}
          />
        )}
      />
    </Form.Field>
  );
}
