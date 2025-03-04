import { VariantType } from '@/shared/model';
import { ShapeType } from '@/shared/model/types';
import { twAllMerge } from '@/shared/utils';

export interface ButtonProps {
  variant?: VariantType;
  shape?: ShapeType;
  disabled?: boolean;
  label?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
export default function InternalButton({
  variant = 'primary',
  shape = 'default',
  label,
  onClick,
  prefixIcon,
  suffixIcon,
  disabled = false,
  className,
}: ButtonProps) {
  const isOnlyIcon = label === undefined && (prefixIcon || !suffixIcon);

  const primaryButtonClasses = `
    bg-primary 
    hover:bg-primary-hover 
    active:bg-primary-active 
    disabled:bg-primary-disabled
  `;

  const secondaryButtonClasses = `
    bg-secondary 
    hover:bg-secondary-hover 
    active:bg-secondary-active 
    disabled:bg-secondary-disabled
  `;

  const plainButtonClasses = `
    border border-gray-150 text-gray-900 
    hover:bg-gray-100 
    active:bg-gray-200
    disabled:bg-bg_disabled
    disabled:text-text_disabled
  `;

  const ghostButtonClasses = `
    bg-white border border-white text-gray-900 
    hover:bg-gray-100 
    active:bg-gray-200 
    disabled:bg-gray-100 disabled:text-gray-400
  `;

  return (
    <button
      className={twAllMerge(
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
