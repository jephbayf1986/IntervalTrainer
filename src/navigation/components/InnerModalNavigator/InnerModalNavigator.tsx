import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalNaviagtionParams } from "./types/ModalNaviagtionParams";

export interface IInnerModalNavigatorProps {
  children: React.ReactNode;
  modal: React.ComponentType | React.ComponentType<{}>;
}

const InnerModalNavigator = <T extends object>({
  children,
  modal
}: IInnerModalNavigatorProps) => {

  const Stack = createNativeStackNavigator<ModalNaviagtionParams<T>>();
  
  function ShowModalSource() {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="ModalSource" component={ShowModalSource} />
      <Stack.Screen name="Modal" component={modal} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
};

export default InnerModalNavigator;