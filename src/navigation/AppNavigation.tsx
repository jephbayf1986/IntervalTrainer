import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./NavigationStack";
import appNavigationTree from "./app-navigation-tree";

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationStack pages={appNavigationTree} />
    </NavigationContainer>
  );
};

export default AppNavigation;