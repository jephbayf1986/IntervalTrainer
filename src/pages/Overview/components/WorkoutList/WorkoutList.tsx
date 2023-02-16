import React from "react";
import { Button, Text } from "react-native";

import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import colors from "../../../../theme/colors";
import { StyledWorkoutListContainer } from "./styles/workout-list-container.styled";

export type IWorkoutListProps = {};

const WorkoutList: React.FC<IWorkoutListProps> = ({}) => {

  const navigation = useAppNavigation();

  return (
    <StyledWorkoutListContainer>
      <Button title="New Workout" onPress={() => navigation.navigate('CreateWorkout')} />
      <Text style={{ color: colors.textLight }}>
        This is the Workout List
      </Text>
      <Button title="Run Workout" onPress={() => navigation.navigate('RunWorkout')} />
      <Button title="Update Workout" onPress={() => navigation.navigate('UpdateWorkout')} />
    </StyledWorkoutListContainer>
  );
};

export default WorkoutList;
