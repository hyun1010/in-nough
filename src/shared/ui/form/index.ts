import type * as React from 'react';
import InternalForm from './Form';
import FormContent from './FormContent';
import FormField from './FormField';
import FormLabel from './FormLabel';
import { FormProps } from './types';
import FormDescrition from './FormDescrition';

type CompoundedComponent = React.FC<FormProps> & {
  Field: typeof FormField;
  Label: typeof FormLabel;
  Content: typeof FormContent;
  Description: typeof FormDescrition;
};

const Form = InternalForm as CompoundedComponent;
Form.Field = FormField;
Form.Label = FormLabel;
Form.Content = FormContent;
Form.Description = FormDescrition;

export default Form;
