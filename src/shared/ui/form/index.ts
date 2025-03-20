import type * as React from 'react';
import InternalForm, { FormProps } from './Form';
import FormContent from './FormContent';
import FormField from './FormField';
import FormLabel from './FormLabel';

type CompoundedComponent = React.FC<FormProps> & {
  Field: typeof FormField;
  Label: typeof FormLabel;
  Content: typeof FormContent;
};

const Form = InternalForm as CompoundedComponent;
Form.Field = FormField;
Form.Label = FormLabel;
Form.Content = FormContent;

export default Form;
