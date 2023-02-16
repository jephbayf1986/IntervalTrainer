import React from 'react';
import styled from 'styled-components/native';
import { HasChildren } from '../../../types/props-bases/HasChildren';

const StyledFormContainer = styled.View`
  padding: 0 24px;
`;

const FormContainer: React.FC<HasChildren> = ({ children }) => {
  return (
    <StyledFormContainer>
        {children}
    </StyledFormContainer>
  );
}

export default FormContainer;