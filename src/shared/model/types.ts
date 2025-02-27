const variantTypes = ['primary', 'secondary', 'plain'] as const;
export type VariantType = (typeof variantTypes)[number];
export type IconProps = {
  className?: string;
};
