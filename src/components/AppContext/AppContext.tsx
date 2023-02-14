import React from 'react';

import { WorkoutContextProvider } from '../../services/workouts/workout.context';
import { HasChildren } from '../../types/HasChildren';

const AppContext: React.FC<HasChildren> = ({ children }) => {
  return (
    <WorkoutContextProvider>
      {children}
    </WorkoutContextProvider>
  );
}

export default AppContext;