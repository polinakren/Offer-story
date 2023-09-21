import React, { Component, ErrorInfo } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
};

export class ErrorCatcher extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <CenterContainer>Что то пошло не так, мы уже занимаемся исправлением этой проблемы</CenterContainer>;
    }
    return this.props.children;
  }
}

const CenterContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
