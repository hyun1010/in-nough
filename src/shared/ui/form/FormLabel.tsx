import React from 'react';

export default function FormLabel({
  required,
  children,
}: {
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="text-sm text-gray-700 flex items-center text-body_medium">
      {required && <span className="mr-0.5">*</span>}
      {children}
    </label>
  );
}
