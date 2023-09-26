import React, { FC, ComponentPropsWithRef } from 'react';
import { useFormikContext as useFormContext } from 'formik';
import styled from '@emotion/styled';

import { Button } from '~components';

type ButtonProps = ComponentPropsWithRef<typeof Button>;
type SubmitButtonProps = { disabledOnInvalid?: boolean } & ButtonProps;

export const SubmitButton: FC<SubmitButtonProps> = ({ children, disabledOnInvalid = true, ...rest }) => {
  const { isSubmitting, isValid, dirty: isDirty } = useFormContext();

  const isValidCountingFormDirtiness = isDirty ? isValid : false;
  const isDisabled = disabledOnInvalid ? !isValidCountingFormDirtiness : false;
  return (
    <Container>
      <StyledButton htmlType={'submit'} disabled={isDisabled} loading={isSubmitting} {...rest}>
        {children}
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`		
  position: relative;		
`;

const StyledButton = styled(Button)`
  width: 100%; 
`;
