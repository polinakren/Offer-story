import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { PasswordProps as AntPasswordProps } from 'antd/es/input';
import { FieldProps } from 'formik';

import { FormField, FormFieldProps } from '../FormField';

type InputProps = AntInputProps & { name: string } & Partial<Pick<FormFieldProps, 'label'>>;

export const Input = ({ name, label, allowClear = true, ...props }: InputProps) => {
  return (
    <FormField name={name} label={label}>
      {(fieldProps: FieldProps) => <AntInput {...props} {...fieldProps.field} name={name} allowClear={allowClear} />}
    </FormField>
  );
};

type PasswordProps = AntPasswordProps & { name: string } & Partial<Pick<FormFieldProps, 'label'>>;

Input.Password = ({ name, label, allowClear = false, ...props }: PasswordProps) => {
  return (
    <FormField name={name} label={label}>
      {(fieldProps: FieldProps) => (
        <AntInput.Password {...props} {...fieldProps.field} name={name} allowClear={allowClear} />
      )}
    </FormField>
  );
};
