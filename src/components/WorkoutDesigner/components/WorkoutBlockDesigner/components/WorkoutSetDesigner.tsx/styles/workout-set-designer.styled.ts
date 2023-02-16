import styled from "styled-components/native";

import colors from "../../../../../../../theme/colors";

export interface IStyledSetColourProps {
  setColour: string;
}

export const StyledSetContainer = styled.View`
  margin-bottom: 5px;
  background-color: ${colors.slightLightOpacity};
  display: flex;
  flex-direction: row;
`;

export const StyledMainDetailsContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StyledSetColour = styled.View<IStyledSetColourProps>`
  background-color: ${(props) => props.setColour}
  margin: 10px;
  height: 30px;
  width: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const StyledSetName = styled.Text`
  flex: 1;
  color: ${colors.textLight}
  font-size: 22px;
  line-height: 42px;
`;

export const StyledSetTime = styled.Text`
  color: ${colors.textLight}
  font-size: 30px;
  padding: 5px;
`;

export const StyledArrowButtonContainer = styled.View`
  padding-right: 5px;
  flex-direction: row;
  align-items: center;
`