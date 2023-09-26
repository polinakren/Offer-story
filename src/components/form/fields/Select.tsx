import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { FieldProps } from 'formik';

import { FormField, FormFieldProps } from '../FormField';

export type SelectProps = AntSelectProps & { name: string } & Partial<Pick<FormFieldProps, 'label' | 'colon'>>;

export const Select = ({ name, label, allowClear = true, colon, onChange, ...props }: SelectProps) => {
  return (
    <FormField label={label} name={name} colon={colon}>
      {(fieldProps: FieldProps) => (
        <AntSelect
          {...props}
          {...fieldProps.field}
          allowClear={allowClear}
          notFoundContent={'Не найдено'}
          onChange={(value, record) => {
            fieldProps.form.setFieldValue(name, record);
            onChange?.(value, record);
          }}
        />
      )}
    </FormField>
  );
};
