import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { INavigationMeta } from "./types/INavigationMeta";

export type INavigationStackProps = {
  pages: INavigationMeta[];
};

const Stack = createNativeStackNavigator();

const NavigationStack: React.FC<INavigationStackProps> = ({ pages }) => {
  return (
    <Stack.Navigator>
      {pages.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} options={x.options}  />
      ))}
    </Stack.Navigator>
  );
};

export default NavigationStack;
