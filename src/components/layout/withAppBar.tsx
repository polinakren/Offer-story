import React, { LazyExoticComponent } from 'react';
import styled from '@emotion/styled';
import { Layout } from 'antd';

import { Palette } from '~utils/styles/Palette';
import { Logo } from '../logo';
import { Button } from '../buttons';

export const withAppBar = (Component: LazyExoticComponent<() => JSX.Element>) => () => {
  const handleLoginClick = () => {
    //TODO: navigate to auth
  };
  const handleRegisterClick = () => {
    //TODO: navigate to registry
  };

  return (
    <PageLayout>
      <Spacer>
        <Logo />
        <StyledLogo>
          <Button color={'white'} size={'small'} onClick={handleLoginClick}>
            Вход
          </Button>
          <Button color={'purple'} size={'small'} onClick={handleRegisterClick}>
            Регистрация
          </Button>
        </StyledLogo>
      </Spacer>
      <Layout.Content>
        <Component />
      </Layout.Content>
    </PageLayout>
  );
};

const PageLayout = styled(Layout)`
  height: 100vh;
  background-color: ${Palette.c_white_50};
`;

const Spacer = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledLogo = styled.div`
  margin-left: 752px;
`;
