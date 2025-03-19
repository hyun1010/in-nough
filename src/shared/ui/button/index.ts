import type * as React from 'react';
import InternalButton, { ButtonProps } from './Button';
import ButtonLink from './ButtonLink';

type CompoundedComponent = React.FC<ButtonProps> & {
  Link: typeof ButtonLink;
};

const Button = InternalButton as CompoundedComponent;
Button.Link = ButtonLink;

export default Button;
