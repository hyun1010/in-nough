const variantTypes = ['primary', 'secondary', 'plain', 'ghost'] as const;
const shapeTypes = ['default', 'rounded'] as const;
export type VariantType = (typeof variantTypes)[number];
export type ShapeType = (typeof shapeTypes)[number];
export type IconProps = {
  className?: string;
};
