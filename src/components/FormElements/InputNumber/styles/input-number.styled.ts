import styled from 'styled-components/native';

export interface IStyledTextNumber {
  textColour: string;
}

const StyledTextNumber = styled.TextInput<IStyledTextNumber>`
  flex: 1;
  color: ${props => props.textColour};
  font-size: 20px;
`;

export default StyledTextNumber;