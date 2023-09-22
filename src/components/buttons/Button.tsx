import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

type ButtonProps = AntButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <AntButton {...props}>{children}</AntButton>;
};
