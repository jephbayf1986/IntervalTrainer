import styled from "styled-components/native";

export interface IStyledInputAreaProps {
    backgroundColour?: string;
    invalid?: boolean;
  }
  
  export interface IStyledInputLabelProps {
    textColour: string;
  }
  
  export interface IStyledTextInput {
    textColour: string;
  }
  
  export const StyledInputContainer = styled.View`
    margin: 10px 0;
  `;
  
  export const StyledInputLabel = styled.Text<IStyledInputLabelProps>`
    color: ${props => props.textColour}
    padding: 8px;
    font-size: 18px;
  `;
  
  export const StyledInputArea = styled.View<IStyledInputAreaProps>`
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