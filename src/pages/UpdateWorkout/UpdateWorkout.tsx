import React from 'react';
import { Text } from 'react-native';
import AppContainer from '../../components/AppContainer/AppContainer';

export type IUpdateWorkoutProps = {
  
}

const UpdateWorkout: React.FC<IUpdateWorkoutProps> = ({ }) => {
  return (
    <AppContainer backgroundColor='red'>
      <Text>Update Workout Page</Text>
    </AppContainer>
  );
}

export default UpdateWorkout;