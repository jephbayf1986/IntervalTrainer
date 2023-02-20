import styled from 'styled-components/native';

export interface IStyledTextInput {
  textColour: string;
}

const StyledTextInput = styled.TextInput<IStyledTextInput>`
  flex: 1;
  color: ${props => props.textColour};
  font-size: 20px;
`;

export default StyledTextInput;