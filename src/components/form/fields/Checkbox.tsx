import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd';

import { FormField, FormFieldProps } from '../FormField';
import { FieldProps } from 'formik';

type CheckboxProps = AntCheckboxProps & { name: string } & Partial<Pick<FormFieldProps, 'label'>>;

export const Checkbox = ({ name, label, ...props }: CheckboxProps) => {
  return (
    <FormField label={label} name={name} valuePropName={'checked'}>
      {(fieldProps: FieldProps) => <AntCheckbox onChange={fieldProps.field.onChange} {...props} />}
    </FormField>
  );
};
