import React from 'react';
import { HasChildren } from '../../../types/props-bases/HasChildren';
import { StyledFormContainer } from './styles/form-container.styled';

export const FormContainer: React.FC<HasChildren> = ({ children }) => {
  return (
    <StyledFormContainer>
        {children}
    </StyledFormContainer>
  );
}