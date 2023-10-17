import React from 'react';
import styled from '@emotion/styled';

import star from '~assets/images/icons/star.svg';
import halfStar from '~assets/images/icons/halfStar.svg';
import emptyStar from '~assets/images/icons/emptyStar.svg';
import { Text } from '~components';

interface RatingProps {
  rating: number;
  color: string;
  size: 'small' | 'large';
}

interface Star {
  id: number;
  src: string;
}

export const Rating = ({ rating, color, size }: RatingProps) => {
  const stars: Star[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push({ id: i, src: star });
    } else if (i - 0.5 <= rating) {
      stars.push({ id: i, src: halfStar });
    } else {
      stars.push({ id: i, src: emptyStar });
    }
  }

  const textSize = size === 'large' ? 'medium_3' : 'medium_1';

  return (
    <Spacer>
      <Text styleName={textSize} color={color}>
        {rating.toFixed(1)}
      </Text>
      {stars.map(mark => (
        <img src={mark.src} key={mark.id} alt={'Звезда'} />
      ))}
    </Spacer>
  );
};

const Spacer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
