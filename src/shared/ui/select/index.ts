import type * as React from 'react';
import InternalSelectBox from './SelectBox';
import SelectFilterable from './SelectFilterable';
import { SelectProps } from './types';
type CompoundedComponent = React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLInputElement>
> & {
  Filter: typeof SelectFilterable;
};

const Select = InternalSelectBox as CompoundedComponent;
Select.Filter = SelectFilterable;

export default Select;
