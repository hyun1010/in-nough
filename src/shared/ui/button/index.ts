import type * as React from 'react';
import InternalButton from './Button';
import ButtonLink from './ButtonLink';
import { ButtonProps } from './types';

type CompoundedComponent = React.FC<ButtonProps> & {
  Link: typeof ButtonLink;
};

const Button = InternalButton as CompoundedComponent;
Button.Link = ButtonLink;

export default Button;
