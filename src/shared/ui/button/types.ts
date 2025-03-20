import { VariantType } from '@/shared/model';
import { ShapeType } from '@/shared/model/types';

export interface BaseButtonProps {
  variant?: VariantType;
  shape?: ShapeType;
  label?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}

export interface ButtonLinkProps extends BaseButtonProps {
  href: string;
}
