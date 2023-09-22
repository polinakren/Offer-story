import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export const Input = ({ name, width, allowClear = true, ...props }: AntInputProps) => {
  return <AntInput allowClear={allowClear} {...props} />;
};
