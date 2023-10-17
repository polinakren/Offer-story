import React from 'react';
import styled from '@emotion/styled';

import { FontSizes } from '~utils/styles/fontSizes';

interface TextProps {
  color: string;
  styleName: keyof typeof options;
  children?: React.ReactNode;
}

export const Text = ({ color, styleName, children }: TextProps) => {
  const styles = options[styleName];
  return (
    <StyledText styles={styles} color={color}>
      {children}
    </StyledText>
  );
};

interface StyledTextProps {
  styles: {
    font_weight: number;
    font_size: number;
    line_height: number;
  };
  color: string;
}

const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-weight: ${({ styles }) => styles.font_weight};
  font-size: ${({ styles }) => `${styles.font_size}px`};
  line-height: ${({ styles }) => `${styles.line_height}px`};
  color: ${({ color }) => color};
`;

const options = {
  extra_bold_1: FontSizes.extra_bold_1,
  extra_bold_2: FontSizes.extra_bold_2,
  extra_bold_3: FontSizes.extra_bold_3,
  extra_bold_4: FontSizes.extra_bold_4,
  extra_bold_5: FontSizes.extra_bold_5,
  extra_bold_6: FontSizes.extra_bold_6,

  medium_1: FontSizes.medium_1,
  medium_2: FontSizes.medium_2,
  medium_3: FontSizes.medium_3,
  medium_4: FontSizes.medium_4,

  bold_1: FontSizes.bold_1,
  bold_2: FontSizes.bold_2,

  semibold: FontSizes.semibold,

  regular_1: FontSizes.regular_1,
  regular_2: FontSizes.regular_2,
  regular_3: FontSizes.regular_3,
};
