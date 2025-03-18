'use client';
import { twAllMerge } from '@/shared/utils';
import { ForwardedRef, forwardRef, useState } from 'react';

export interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const InternalInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      type = 'text',
      value,
      disabled,
      placeholder = '',
      maxLength,
      prefixIcon,
      suffixIcon,
      onChange,
      onSubmit,
      className,
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') onSubmit?.(e);
    };

    return (
      <div className="relative h-fit group">
        {label && (
          <label
            className={twAllMerge(
              `absolute left-4 text-gray-700 px-2 text-caption_medium transition-all duration-200`,
              isFocused || value
                ? '-top-2 text-primary-700 bg-white'
                : 'top-1/2 -translate-y-1/2 bg-transparent pointer-events-none'
            )}
          >
            {label}
          </label>
        )}

        {prefixIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 mr-2">
            {prefixIcon}
          </div>
        )}

        <input
          ref={ref}
          type={type}
          value={value}
          maxLength={maxLength}
          placeholder={isFocused || value ? '' : placeholder} // 포커스되면 placeholder 숨김
          disabled={disabled}
          className={twAllMerge(
            `peer rounded-lg outline-none
              h-12 w-80 px-6 py-3 text-headline_2 border
            border-gray-300 text-gray-800 focus:border-primary-600`,
            prefixIcon && 'pl-14',
            suffixIcon && 'pr-14',
            className
          )}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {suffixIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 mr-2">
            {suffixIcon}
          </div>
        )}
      </div>
    );
  }
);

InternalInput.displayName = 'Input';
export default InternalInput;
