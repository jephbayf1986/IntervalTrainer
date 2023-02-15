import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../theme/colors';

const StyledSeperator = styled.View`
  background-color: ${colors.textLight};
  height: 2px;
  margin: 10px 20px;
`;

export const Seperator: React.FC = () => <StyledSeperator />