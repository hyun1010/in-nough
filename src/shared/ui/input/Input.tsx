'use client';
import { twAllMerge } from '@/shared/utils';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';

export interface InputProps {
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  prefixIcon?: () => React.ReactElement;
  suffixIcon?: () => React.ReactElement;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}
const InternalInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      value: initValue,
      disabled,
      placeholder = '내용을 입력하세요.',
      maxLength,
      prefixIcon,
      suffixIcon,
      onChange,
      onSubmit,
      className,
    } = props;

    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e.target.value);
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') onSubmit?.(e);
    };

    useEffect(() => {
      if (initValue) setValue(initValue);
    }, [initValue]);

    return (
      <div className="relative w-full h-fit">
        {prefixIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 mr-2">
            {prefixIcon()}
          </div>
        )}
        <input
          ref={ref}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          className={twAllMerge(
            `bg-neutral-3 rounded-lg outline-none
              h-12 w-80 px-6 py-3 text-headline_2 border
            border-neutral-3 font-medium text-neutral-1 focus:border-primary`,
            prefixIcon && 'pl-14',
            suffixIcon && 'pr-14',
            className
          )}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />
        {suffixIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 mr-2">
            {suffixIcon()}
          </div>
        )}
      </div>
    );
  }
);

InternalInput.displayName = 'Input';
export default InternalInput;
