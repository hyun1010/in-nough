'use client';
import { cn } from '@/shared/utils';
import Link from 'next/link';
import {
  ghostButtonClasses,
  plainButtonClasses,
  primaryButtonClasses,
  secondaryButtonClasses,
} from './styles';
import { BaseButtonProps } from './types';

export interface ButtonLinkProps extends BaseButtonProps {
  href: string;
}
export default function InternalButtonLink({
  variant = 'primary',
  shape = 'default',
  label,
  href,
  prefixIcon,
  suffixIcon,
  disabled = false,
  className,
}: ButtonLinkProps) {
  const isOnlyIcon = label === undefined && (prefixIcon || !suffixIcon);

  return (
    <Link
      href={href}
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
    >
      {prefixIcon && prefixIcon}
      {label && label}
      {suffixIcon && suffixIcon}
    </Link>
  );
}
