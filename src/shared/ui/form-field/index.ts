import PhoneField from './PhoneField';
import SelectBaseField from './SelectBaseField';
import SelectFilterField from './SelectFilterField';
import SingleField from './SingleField';

export const InputField = {
  Single: SingleField,
  PhoneNumber: PhoneField,
};

export const SelectField = {
  Base: SelectBaseField,
  Filter: SelectFilterField,
};
