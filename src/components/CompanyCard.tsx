import styled from '@emotion/styled';
import React from 'react';

import google from '~assets/images/icons/google.svg';
import { Palette } from '~utils/styles/Palette';
import { Text, Rating } from './index';
import { useNavigate } from '~services/router/hooks';
import { routeNames } from '~services/router';

interface CompanyCardProps {
  name: string;
  rating: number;
  children?: React.ReactNode;
}

export const CompanyCard = ({ name, rating, children }: CompanyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ name: routeNames.company, params: { company: name } });
  };

  return (
    <StyledCompany onClick={handleClick}>
      <img src={google} alt={'logo-google'} />
      <div>
        <Text styleName={'extra_bold_4'} color={Palette.c_secondary_800}>
          {name}
        </Text>
        <StyledRating>
          <Rating rating={rating} color={Palette.c_third_300} size={'large'} />
        </StyledRating>
      </div>
      {children}
    </StyledCompany>
  );
};

const StyledCompany = styled.div`
  background-color: ${Palette.c_white_50};
  border-radius: 50px;
  box-shadow: 4px 4px 28px ${Palette.c_shadow_block};
  cursor: pointer;
  padding: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  
  &:hover {
    box-shadow: 4px 4px 28px ${Palette.c_shadow_block_hovered};
  }

  &:active {
    box-shadow: 4px 4px 14px ${Palette.c_shadow_block_pressed};
  }
`;

const StyledRating = styled.div`
  margin-top: 8px;
  padding-right: 15px;
`;
