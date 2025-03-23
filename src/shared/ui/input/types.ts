export interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}
