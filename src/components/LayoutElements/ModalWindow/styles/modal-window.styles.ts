import styled from 'styled-components/native';

export interface IStyledModalTitleProps {
  color: string;
}

export interface IStyledModalContentContainerProps {
  backgroundColor: string;
}

export const StyledModalHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StyledModalTitle = styled.Text<IStyledModalTitleProps>`
  flex: 1;
  color: ${props => props.color};
  text-align: center;
  font-size: 16px;
  padding-top: 5px;
`;

export const StyledModalContentContainer = styled.View<IStyledModalContentContainerProps>`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 12px;
`;