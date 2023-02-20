import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../theme/colors';

export interface ISeperatorProps {
  color?: string;
}

const StyledSeperator = styled.View<ISeperatorProps>`
  background-color: ${props => props.color ?? colors.textLight};
  height: 2px;
  margin: 10px 20px;
`;

const Seperator: React.FC<ISeperatorProps> = (props) => <StyledSeperator {...props} />

export default Seperator;