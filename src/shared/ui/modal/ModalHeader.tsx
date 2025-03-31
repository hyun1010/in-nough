import { IconX } from '@tabler/icons-react';
import React from 'react';

export default function ModalHeader({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-10 items-center justify-between">
      {children}
      <div
        className="flex h-10 w-[3.2rem] cursor-pointer items-center justify-center"
        onClick={onClose}
      >
        <IconX className="fill-gray-700" />
      </div>
    </div>
  );
}
