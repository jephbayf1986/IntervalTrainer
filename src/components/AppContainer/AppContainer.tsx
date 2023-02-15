import React from "react";
import { StatusBar } from 'expo-status-bar'

import { StyledSafeAreaView } from "./Styles/app-container.styled";
import { IAppContainerProps } from "./types/IAppContainerProps";

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