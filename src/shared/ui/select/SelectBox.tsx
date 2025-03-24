'use client';
import { forwardRef, useMemo, useState } from 'react';
import BaseSelect from './BaseSelect';
import { SelectProps } from './types';

const SelectBox = forwardRef<HTMLDivElement, SelectProps>(
  ({ onSelect, options, selected, ...props }: SelectProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const value = useMemo(() => {
      const item = options.find((option) => option.id === selected);
      return item?.name || '';
    }, [options, selected]);

    const handleSelect = (value: string | number) => {
      onSelect?.(value);
      setIsOpen(false);
    };

    return (
      <BaseSelect
        ref={ref}
        {...props}
        type="base"
        options={options}
        selected={selected}
        value={value}
        onSelect={handleSelect}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }
);

SelectBox.displayName = 'SelectBox';
export default SelectBox;
