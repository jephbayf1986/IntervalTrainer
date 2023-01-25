import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

import { HasChildren } from "../types/HasChildren";

export interface IAppContainerProps extends HasChildren {
  backgroundColor?: string;
}

export const AppContainer: React.FC<IAppContainerProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <SafeAreaView style={createStyles(backgroundColor).container}>
      {children}
    </SafeAreaView>
  );
};

const createStyles = (backgroundColor?: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: backgroundColor ?? "#fff",
    },
  });
};
