import { IconCircleFilled } from '@tabler/icons-react';
import { FormLabelProps } from './types';

export default function FormLabel({ required, children }: FormLabelProps) {
  return (
    <label className="text-sm text-gray-700 flex items-center text-body_medium">
      {required && (
        <IconCircleFilled size={5} className="mr-0.5 fill-primary-500" />
      )}
      {children}
    </label>
  );
}
