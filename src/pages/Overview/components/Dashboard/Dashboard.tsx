import React from 'react';
import { View, Text, Button } from 'react-native';
import colors from '../../../../theme/colors';
import StyledDashboardContainer from './styles/dashboard-container.styled';

export type IDashboardProps = {
  
}

export const Dashboard: React.FC<IDashboardProps> = ({ }) => {
  return (
    <StyledDashboardContainer>
        <Text style={{color: colors.textLight}}>
            This is the Dashboard
        </Text>
    </StyledDashboardContainer>
  );
}