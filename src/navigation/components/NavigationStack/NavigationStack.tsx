import React from "react";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import INavigationGroup from "../../types/INavigationGroup";

export interface INavigationStackProps<T extends ParamListBase> {
  tree: INavigationGroup<T>[];
};

const NavigationStack = <T extends ParamListBase>(props: INavigationStackProps<T>) => {
  
  const Stack = createNativeStackNavigator<T>();

  return (

    <Stack.Navigator>
      {
        props.tree?.map((g, i) => (
          <Stack.Group key={i} screenOptions={g.options}>
            {g.pages?.map((p, k) => (
              <Stack.Screen key={k} name={p.name} component={p.component} options={p.additionalOptions}  />
            ))}
          </Stack.Group>
        ))
      }
    </Stack.Navigator>
  );
};

export default NavigationStack;
