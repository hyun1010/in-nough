'use client';
import { cn } from '@/shared/utils';
import {
  ghostButtonClasses,
  plainButtonClasses,
  primaryButtonClasses,
  secondaryButtonClasses,
} from './styles';
import { ButtonProps } from './types';

export default function InternalButton({
  variant = 'primary',
  shape = 'default',
  type = 'button',
  label,
  onClick,
  prefixIcon,
  suffixIcon,
  disabled = false,
  className,
}: ButtonProps) {
  const isOnlyIcon = label === undefined && (prefixIcon || !suffixIcon);

  return (
    <button
      type={type}
      className={cn(
        'w-80 text-white py-3 flex items-center justify-center rounded-md text-headline_2',
        variant === 'primary' && primaryButtonClasses,
        variant === 'secondary' && secondaryButtonClasses,
        variant === 'plain' && plainButtonClasses,
        variant === 'ghost' && ghostButtonClasses,
        shape === 'rounded' && 'rounded-full',
        isOnlyIcon && 'px-2.5 py-2.5 w-fit h-fit',
        disabled && 'opacity-70 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {prefixIcon && prefixIcon}
      {label && label}
      {suffixIcon && suffixIcon}
    </button>
  );
}
