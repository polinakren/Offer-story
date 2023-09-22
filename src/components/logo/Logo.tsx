import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Palette } from '~utils/styles/Palette';
import { Text } from '~components';
import { routeNames } from '~services/router/routes';
import logo from '~assets/images/icons/logo.svg';

export const Logo = () => {
  return (
    <StyledLink to={routeNames.home}>
      <Spacer>
        <img alt='logo' src={logo} />
        <Text styleName={'extra_bold_4'} color={Palette.c_primary_600}>
          Offer-Story
        </Text>
      </Spacer>
    </StyledLink>
  );
};

const Spacer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding-left: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
