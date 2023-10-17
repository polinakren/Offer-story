import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { PasswordProps as AntPasswordProps } from 'antd/es/input';
import { FieldProps } from 'formik';
import styled from '@emotion/styled';

import { FormField, FormFieldProps } from '../FormField';
import { Palette } from '~utils/styles/Palette';

type InputProps = AntInputProps & { name: string } & Partial<Pick<FormFieldProps, 'label'>>;

export const Input = ({ name, label, allowClear = true, ...props }: InputProps) => {
  return (
    <FormField name={name} label={label}>
      {(fieldProps: FieldProps) => <StyledInput {...props} {...fieldProps.field} name={name} allowClear={allowClear} />}
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

const StyledInput = styled(AntInput)<AntInputProps>`
  background-color: ${Palette.c_primary_50};
  border: none;
  color: ${Palette.c_secondary_800};
  box-shadow: none !important;

  border-radius: ${({ size }) => {
    if (size === 'small') {
      return `16px`;
    } else {
      return `20px`;
    }
  }};

  padding: ${({ size }) => {
    if (size === 'small') {
      return `15px 24px !important`;
    } else {
      return `17px 32px !important`;
    }
  }};
  
  &:hover {
    padding: ${({ size }) => {
      if (size === 'small') {
        return `14px 24px !important`;
      } else {
        return `16px 32px !important`;
      }
    }};
    border: 1px solid ${Palette.c_primary_500} !important;
  }
  
  &:focus &:hover  {
    
    border: 2px solid ${Palette.c_primary_600} !important;
  }
  
  input {
    background-color: ${Palette.c_primary_50};
    color: ${Palette.c_secondary_800};
  }
`;
