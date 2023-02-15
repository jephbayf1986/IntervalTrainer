import styled from 'styled-components/native';
import colors from '../../../../../theme/colors';

export const StyledBlockContainer = styled.View`
  margin: 6px 0px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledBlockTitle = styled.Text`
  position: absolute;
  color: ${colors.textLight};
  background-color: ${colors.darkBlue};
  margin-top: -12px;
  margin-left: 20px;
  font-size: 18px;
  padding: 0 10px;
`;

export const StyledBlockSettingsButton = styled.TouchableOpacity`
  color: ${colors.textLight};
  margin-right: 10px;
`;

export const StyledBlockInnerContainer = styled.View`
  flex: 1;
  margin: 5px;
  border: 1px solid ${colors.textLight};
  min-height: 100px;
`;

export const StyledBlockRepeaterContainer = styled.View`
  margin-left: 10px;
`;

export const StyledBlockRepeater = styled.Text`
  
`;