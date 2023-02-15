import React from "react";
import { StatusBar } from "expo-status-bar";
import { useHeaderHeight } from '@react-navigation/elements';

import { StyledSafeAreaViewWithSpaceForHeader } from "./Styles/app-container.styled";
import { IAppContainerProps } from "./types/IAppContainerProps";

export const AppContainerWithHeader: React.FC<IAppContainerProps> = ({
  backgroundColor,
  children,
}) => {
    
  const spaceForHeader = useHeaderHeight();

  return (
    <>
      <StyledSafeAreaViewWithSpaceForHeader
        backgroundColor={backgroundColor}
        extraTopPadding={spaceForHeader}
      >
        {children}
      </StyledSafeAreaViewWithSpaceForHeader>
      <StatusBar />
    </>
  );
};

export default AppContainerWithHeader;