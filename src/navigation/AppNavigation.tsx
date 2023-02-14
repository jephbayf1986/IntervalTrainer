import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Overview from "../pages/Overview/Overview";
import RunWorkout from "../pages/RunWorkout/RunWorkout";
import UpdateWorkout from "../pages/UpdateWorkout/UpdateWorkout";
import CreateWorkout from "../pages/CreateWorkout/CreateWorkout";

export type IAppNavigationProps = {};

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC<IAppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Overview} />
        <Stack.Screen name="CreateWorkout" component={CreateWorkout} />
        <Stack.Screen name="UpdateWorkout" component={UpdateWorkout} />
        <Stack.Screen name="RunWorkout" component={RunWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;