'use client';
import { ChangeEvent, forwardRef, useEffect, useMemo, useState } from 'react';
import BaseSelect from './BaseSelect';
import { SelectProps } from './types';

const SelectFilterable = forwardRef<HTMLDivElement, SelectProps>(
  (
    { selected: propSelected, options, onSelect, ...props }: SelectProps,
    ref
  ) => {
    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [localSelected, setLocalSelected] = useState<string | number>(
      propSelected || ''
    );
    const [debouncedSearchValue, setDebouncedSearchValue] =
      useState(searchValue);

    const filteredOptions = useMemo(() => {
      return options.filter((option) =>
        option.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
    }, [options, debouncedSearchValue]);

    const value = useMemo(() => {
      if (localSelected) {
        const item = options.find((option) => option.id === localSelected);
        return item?.name || searchValue;
      }
      return searchValue;
    }, [options, localSelected, searchValue]);

    const handleSelect = (value: string | number) => {
      onSelect?.(value);
      setLocalSelected(value);
      setSearchValue('');
      setIsOpen(false);
    };

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      const newSearchValue = e.target.value;
      setSearchValue(newSearchValue);
      setLocalSelected('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const selectedOption = filteredOptions.find(
          (option) =>
            option.name.toLowerCase() === debouncedSearchValue.toLowerCase()
        );

        if (selectedOption) {
          handleSelect(selectedOption.id);
        } else {
          setLocalSelected(propSelected || '');
          setSearchValue('');
          setIsOpen(false);
        }
      }
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearchValue(searchValue);
      }, 300);

      return () => clearTimeout(timer);
    }, [searchValue]);

    useEffect(() => {
      if (propSelected) {
        setLocalSelected(propSelected);
      }
    }, [propSelected]);

    return (
      <BaseSelect
        ref={ref}
        {...props}
        type="filter"
        selected={localSelected}
        value={value}
        options={filteredOptions}
        onSelect={handleSelect}
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }
);

SelectFilterable.displayName = 'SelectFilterable';
export default SelectFilterable;
