import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import styled from '@emotion/styled';

import { Palette } from '~utils/styles/Palette';

type ButtonProps = AntButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => {
  const ButtonComponent = props.color === 'white' ? WhiteButton : PurpleButton;
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

const ButtonBase = styled(AntButton)<ButtonProps>`
  height: ${({ size }) => (size ? buttonSizes[size].height : '56px')} !important;
  font-size: ${({ size }) => (size ? buttonSizes[size].fontSize : '16px')} !important;
  border-radius: ${({ size }) => (size ? buttonSizes[size].borderRadius : '20px')} !important;
  padding: ${({ size }) => (size ? buttonSizes[size].padding : '11px 32px')} !important;
  font-weight: 700;
`;

const WhiteButton = styled(ButtonBase)`
  color: ${Palette.c_secondary_800};
  box-shadow: 4px 4px 27px ${Palette.c_shadow_btn_w};
  background-color: ${Palette.c_white_50};
  border: 1px solid ${Palette.c_white_300};

  &:hover {
    color: ${Palette.c_secondary_800} !important;
    background-color: ${Palette.c_white_100} !important;
    border: 1px solid ${Palette.c_white_400} !important;
  }

  &:active {
    color: ${Palette.c_secondary_800} !important;
    background-color: ${Palette.c_white_200} !important;
    border: 1px solid ${Palette.c_white_500} !important;
    box-shadow: 4px 4px 27px ${Palette.c_shadow_btn_w_pressed} !important;
  }
`;

const PurpleButton = styled(ButtonBase)<ButtonProps>`
  color: ${Palette.c_white_50};
  box-shadow: 4px 4px 27px ${Palette.c_shadow_btn_p};
  background-color: ${Palette.c_primary_600};
  border: 1px solid ${Palette.c_primary_600};

  &:hover {
    color: ${Palette.c_white_50} !important;
    background-color: ${Palette.c_primary_700} !important; 
    border: 1px solid ${Palette.c_primary_700} !important;
  }
  &:active {
    color: ${Palette.c_white_50} !important;
    background-color: ${Palette.c_primary_800} !important;
    border: 1px solid ${Palette.c_primary_800} !important;
    box-shadow: 4px 4px 27px ${Palette.c_shadow_btn_p_pressed} !important;
  }
`;

const buttonSizes = {
  small: {
    height: '48px',
    fontSize: '14px',
    borderRadius: '16px',
    padding: '11px 24px',
  },
  middle: {
    height: '56px',
    fontSize: '16px',
    borderRadius: '20px',
    padding: '9.5px 11px',
  },
  large: {
    height: '56px',
    fontSize: '16px',
    borderRadius: '20px',
    padding: '11px 32px',
  },
};
