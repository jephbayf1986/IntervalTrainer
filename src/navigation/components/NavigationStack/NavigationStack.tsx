import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { INavigationMeta } from "../../types/INavigationMeta";
import { ParamListBase } from "@react-navigation/native";

export interface INavigationStackProps<T extends ParamListBase> {
  pages: INavigationMeta<T>[];
};

const NavigationStack = <T extends ParamListBase>(props: INavigationStackProps<T>) => {
  
  const Stack = createNativeStackNavigator<T>();

  return (
    <Stack.Navigator>
      {props.pages.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} options={x.options}  />
      ))}
    </Stack.Navigator>
  );
};

export default NavigationStack;
