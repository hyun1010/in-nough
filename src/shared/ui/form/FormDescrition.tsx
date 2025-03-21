import { cn } from '@/shared/utils';
import {
  IconAlertSquareRoundedFilled,
  IconSquareCheckFilled,
} from '@tabler/icons-react';
import React, { useMemo } from 'react';

interface FormDescritionProps {
  status?: 'default' | 'warn' | 'error' | 'success';
  descrition: string;
  className?: string;
}
export default function FormDescrition({
  status = 'default',
  descrition,
  className,
}: FormDescritionProps) {
  const iconMap = useMemo(() => {
    switch (status) {
      case 'warn':
      case 'error':
        return <IconAlertSquareRoundedFilled size={20} />;
      case 'success':
        return <IconSquareCheckFilled size={20} />;
      default:
        return null;
    }
  }, [status]);
  return (
    <div
      className={cn(
        'flex items-center justify-start gap-0.5 h-5 text-caption_medium text-gray-700',
        { 'text-orange-600': status === 'warn' },
        { 'text-red-600': status === 'error' },
        { 'text-green-600': status === 'success' },
        className
      )}
    >
      {iconMap}
      {descrition}
    </div>
  );
}
