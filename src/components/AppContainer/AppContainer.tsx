import React from "react";
import { StatusBar } from 'expo-status-bar'

import { HasChildren } from "../../types/props-bases/HasChildren";
import { StyledSafeAreaView } from "./Styles/app-container.styled";

export interface IAppContainerProps extends HasChildren {
  backgroundColor?: string;
}

const AppContainer: React.FC<IAppContainerProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <>
      <StyledSafeAreaView backgroundColor={backgroundColor}>
        {children}
      </StyledSafeAreaView>
      <StatusBar />
    </>
  );
};

export default AppContainer;