import React from 'react';
import { Text } from 'react-native';
import AppContainer from '../../components/AppContainer/AppContainer';

export type IRunWorkoutProps = {
  
}

const RunWorkout: React.FC<IRunWorkoutProps> = ({ }) => {
  return (
    <AppContainer backgroundColor='red'>
      <Text>Run Workout Page</Text>
    </AppContainer>
  );
}

export default RunWorkout;