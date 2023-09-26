import { Field, FieldProps } from 'formik';
import { ComponentProps, ReactNode } from 'react';

import { AntForm } from './index';

export type FormFieldProps = {
  name: string;
  children: (fieldProps: FieldProps) => ReactNode;
} & Omit<ComponentProps<typeof Field>, 'children'>;

export const FormField = ({ name, children, label }: FormFieldProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        return (
          <AntForm.Item
            validateStatus={fieldProps.meta.touched && Boolean(fieldProps.meta.error) ? 'error' : 'success'}
            help={fieldProps.meta.touched && fieldProps.meta.error}
            label={label}
          >
            {children(fieldProps)}
          </AntForm.Item>
        );
      }}
    </Field>
  );
};
