import { Platform, StatusBar, ViewProps } from "react-native";
import styled from "styled-components/native";

import { GetIosPlatformVersion } from "../../../utils/platform.utils";

export interface StyledSafeAreaViewProps extends ViewProps {
  backgroundColor?: string;
  extraTopPadding?: number;
}

const getPaddingTop = (props: StyledSafeAreaViewProps): number => {
  const extraTopPadding = props.extraTopPadding ?? 0;

  if (Platform.OS === "android")
    return (StatusBar.currentHeight ?? 0) + extraTopPadding;

  if (Platform.OS === "ios" && GetIosPlatformVersion() < 11)
    return 10 + extraTopPadding;

  return extraTopPadding;
};

export const StyledSafeAreaView = styled.SafeAreaView<StyledSafeAreaViewProps>`
  flex: 1;
  padding-top: ${getPaddingTop}px;
  background-color: ${(props) => props.backgroundColor ?? "white"};
`;

export const StyledSafeAreaViewWithSpaceForHeader = styled.SafeAreaView<StyledSafeAreaViewProps>`
  flex: 1;
  padding-top: ${getPaddingTop}px;
  background-color: ${(props) => props.backgroundColor ?? "white"};
`;
