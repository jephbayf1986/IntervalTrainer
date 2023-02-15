import styled from 'styled-components/native';

export interface IStyledTextInputContainerProps {
  backgroundColour?: string;
  invalid?: boolean;
}

export interface IStyledInputBoxLabelProps {
  textColour: string;
}

export interface IStyledTextInput {
  textColour: string;
}

export const StyledInputBoxContainer = styled.View`
  margin: 10px 0;
`;

export const StyledInputBoxLabel = styled.Text<IStyledInputBoxLabelProps>`
  color: ${props => props.textColour}
  padding: 8px;
  font-size: 18px;
`;

export const StyledTextInputContainer = styled.View<IStyledTextInputContainerProps>`
  background-color: ${props => props.backgroundColour ?? 'white'};
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: ${props => (props.invalid ?? false) ? '2px solid red' : '0' };
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const StyledTextInput = styled.TextInput<IStyledTextInput>`
  flex: 1;
  color: ${props => props.textColour};
  font-size: 20px;
`;