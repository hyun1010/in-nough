'use client';
import { cn } from '@/shared/utils';
import { ForwardedRef, forwardRef, useMemo, useState } from 'react';
import './styles.css';
import { InputProps } from './types';
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

    const placeholderText = useMemo(() => {
      if (label) return isFocused ? placeholder : '';
      return placeholder;
    }, [label]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') onSubmit?.(e);
    };

    const handleMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === 'number' && maxLength && e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
    };

    return (
      <div className="relative h-fit group">
        {label && (
          <label
            className={cn(
              `absolute left-4 text-gray-700 px-2 text-body_nomal transition-all duration-200`,
              {
                'top-1/2 -translate-y-1/2 bg-transparent pointer-events-none':
                  !isFocused && !value,
              },
              {
                '-top-2 text-primary-700 bg-white text-caption_medium':
                  isFocused || value,
              }
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
          value={value || ''}
          maxLength={maxLength}
          placeholder={placeholderText}
          disabled={disabled}
          className={cn(
            `peer rounded-lg outline-none
              h-12 w-80 px-6 py-3 text-headline_2 border
            border-gray-300 text-gray-800 focus:border-primary-600`,
            prefixIcon && 'pl-14',
            suffixIcon && 'pr-14',
            className
          )}
          onInput={handleMaxLength}
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
