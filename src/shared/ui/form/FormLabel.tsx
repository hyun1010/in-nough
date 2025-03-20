import { FormLabelProps } from './types';

export default function FormLabel({ required, children }: FormLabelProps) {
  return (
    <label className="text-sm text-gray-700 flex items-center text-body_medium">
      {required && <span className="mr-0.5">*</span>}
      {children}
    </label>
  );
}
