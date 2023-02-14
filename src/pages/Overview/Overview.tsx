import React from "react";
import { Button, Text } from "react-native";

import AppContainer from "../../components/AppContainer/AppContainer";
import { NavigationPage } from "../../types/props-bases/NavigationPage";

const Overview: React.FC<NavigationPage> = ({ navigation }) => {
  return (
    <AppContainer backgroundColor="darkblue">
      <Text>App Overview Page</Text>
      <Button title="Run Workout" onPress={() => navigation.navigate('RunWorkout')} />
      <Button title="Create Workout" onPress={() => navigation.navigate('CreateWorkout')}  />
      <Button title="Update Workout" onPress={() => navigation.navigate('UpdateWorkout')}  />
    </AppContainer>
  );
};

export default Overview;
