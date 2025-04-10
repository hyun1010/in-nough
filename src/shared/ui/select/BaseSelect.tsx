'use client';
import { useClickOutside } from '@/shared/hook';
import { cn } from '@/shared/utils';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { forwardRef, useRef } from 'react';
import { SelectBoxProps } from './types';

const SelectInput = ({
  type,
  value,
  onChange,
  placeholder,
  onKeyDown,
  handleToggleOpen,
  className,
}: {
  type: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  handleToggleOpen: () => void;
  className?: string;
}) => {
  if (type === 'base') {
    return (
      <div
        className={cn(
          `peer h-10 w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-3 pr-8 text-body_nomal text-gray-800 outline-none focus:border-primary-600`,
          className
        )}
        onClick={handleToggleOpen}
      >
        {value}
      </div>
    );
  }

  if (type === 'filter') {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleToggleOpen}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className={cn(
          `peer h-10 w-full rounded-lg border border-gray-300 px-4 py-3 pr-8 text-body_nomal text-gray-800 outline-none focus:border-primary-600`,
          className
        )}
      />
    );
  }

  return null;
};

const BaseSelect = forwardRef<HTMLDivElement, SelectBoxProps>(
  (
    {
      type = 'base',
      options,
      onSelect,
      onChange,
      placeholder,
      selected,
      value,
      onKeyDown,
      isOpen,
      setIsOpen,
      className,
    }: SelectBoxProps,
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = (value: string | number) => {
      onSelect?.(value);
      setIsOpen(false);
    };

    const handleToggleOpen = () => {
      setIsOpen(!isOpen);
    };

    const mergedRef = (instance: HTMLDivElement | null) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }
      containerRef.current = instance;
    };

    useClickOutside(containerRef, () => setIsOpen(false));

    return (
      <div ref={mergedRef} className="relative w-full grow">
        <SelectInput
          type={type}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          handleToggleOpen={handleToggleOpen}
          className={className}
        />
        <div className="pointer-events-none absolute right-2 top-1/2 translate-y-[-50%] transform text-gray-500 peer-focus-within:text-primary-600">
          {isOpen ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {isOpen && (
          <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
            {options?.length > 0 ? (
              options.map((option) => (
                <li
                  key={option.id}
                  className={cn(
                    'cursor-pointer px-4 py-2 text-body_nomal hover:bg-primary-50',
                    {
                      'bg-primary-100': selected === option.id,
                    }
                  )}
                  onClick={() => handleSelect(option.id)}
                >
                  {option.name}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">데이터가 없습니다.</li>
            )}
          </ul>
        )}
      </div>
    );
  }
);

BaseSelect.displayName = 'BaseSelect';
export default BaseSelect;
