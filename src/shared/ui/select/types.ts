import { ChangeEvent } from 'react';

export interface OptionType {
  id: string | number;
  name: string;
}

export interface SelectProps {
  selected?: string | number;
  value?: string;
  options: OptionType[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

export interface SelectBoxProps extends SelectProps {
  type?: 'base' | 'filter';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
