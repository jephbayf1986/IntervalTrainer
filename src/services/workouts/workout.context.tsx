import React, { useState } from 'react';

import { HasChildren } from '../../types/HasChildren';
import { Workout } from '../../types/Workout';

export type WorkoutContextType = {
  getWorkouts: Workout[];
  getWorkout: (id: number) => Workout | undefined;
  addWorkout: (newWorkout: Workout) => void;
  updateWorkout: (workout: Workout) => void
  deleteWorkout: (id: number) => void;
};

export const WorkoutContext = React.createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutContextProvider: React.FC<HasChildren> = ({ children }) => {

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const getWorkout = (id: number): Workout | undefined => {
    return workoutList.find(x => x.id == id);
  }

  const addWorkout = (newWorkout: Workout): void => {
    setWorkoutList([...workoutList, newWorkout])
  }

  const updateWorkout = (Workout: Workout): void => {
    setWorkoutList([...(workoutList.filter(x => x.id != Workout.id)), Workout]);
  }

  const deleteWorkout = (id: number): void => {
    setWorkoutList(workoutList.filter(x => x.id != id));
  }

  return (
    <WorkoutContext.Provider 
      value={{
        getWorkouts: workoutList,
        getWorkout,
        addWorkout,
        updateWorkout,
        deleteWorkout
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};