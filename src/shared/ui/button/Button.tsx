import { VariantType } from '@/shared/model';
import { ShapeType } from '@/shared/model/types';
import { cn } from '@/shared/utils';

export interface ButtonProps {
  variant?: VariantType;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
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
  type = 'button',
  label,
  onClick,
  prefixIcon,
  suffixIcon,
  disabled = false,
  className,
}: ButtonProps) {
  const isOnlyIcon = label === undefined && (prefixIcon || !suffixIcon);

  const primaryButtonClasses = `
    bg-primary-600 
    hover:bg-primary-700 
    active:bg-primary-800 
    disabled:bg-primary-800/30
  `;

  const secondaryButtonClasses = `
    bg-secondary-500 
    hover:bg-secondary-600 
    active:bg-secondary-700 
    disabled:bg-secondary-600/50
  `;

  const plainButtonClasses = `
    border border-gray-300 text-gray-900 
    hover:bg-gray-200 
    active:bg-gray-300
    disabled:bg-white
    disabled:text-gray-500
  `;

  const ghostButtonClasses = `
    bg-white border border-white text-gray-900 
    hover:bg-gray-100 
    active:bg-gray-200 
    disabled:bg-gray-100 disabled:text-gray-500
  `;

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
