import React from 'react';
import styled from '@emotion/styled';

import star from '~assets/images/icons/star.svg';
import halfStar from '~assets/images/icons/halfStar.svg';
import emptyStar from '~assets/images/icons/emptyStar.svg';
import { Text } from '~components';

export const Rating = ({ rating, color, size }: { rating: number; color: string; size: 'small' | 'large' }) => {
  const full = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) {
      return { id: i + 1, src: star };
    } else if (i === full && rating % 1) {
      return { id: i + 1, src: halfStar };
    }
    return { id: i + 1, src: emptyStar };
  });

  return (
    <Spacer>
      <Text styleName={size === 'large' ? 'medium_3' : 'medium_1'} color={color}>
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
