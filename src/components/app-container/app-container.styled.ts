import { Platform, StatusBar, ViewProps } from "react-native";
import styled from "styled-components/native";

import { GetIosPlatformVersion } from "../../utils/platform.utils";

export interface StyledSafeAreaViewProps extends ViewProps {
  backgroundColor?: string;
}

const getPaddingTop = (props: StyledSafeAreaViewProps): number => {
  if (Platform.OS === "android") return StatusBar.currentHeight ?? 0;

  if (Platform.OS === "ios" && GetIosPlatformVersion() < 11) return 10;

  return 0;
};

export const StyledSafeAreaView = styled.SafeAreaView<StyledSafeAreaViewProps>`
  flex: 1;
  padding-top: ${getPaddingTop}px;
  background-color: ${(props) => props.backgroundColor ?? "white"};
`;
