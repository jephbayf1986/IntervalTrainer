import Workout, { WorkoutBlock, WorkoutSet } from "../types/Workout";
import Uuid from "../types/Uuid";
import colors from "../theme/colors";

export const defaultWorkoutSet = (setNumber: number): WorkoutSet => {
  return {
    id: new Uuid(),
    order: setNumber,
    name: 'Run',
    colour: colors.neonPink,
    timeSeconds: 30,
    repetitions: 1
  };
}

export const defaultWorkoutBlock = (blockNumber: number): WorkoutBlock => {
  return {
    id: new Uuid(),
    order: blockNumber,
    name: `Block-${blockNumber}`,
    sets: [
      defaultWorkoutSet(1)
    ],
  }
};

export const defaultWorkout: Workout = {
  id: new Uuid(),
  name: "",
  blocks: [
    defaultWorkoutBlock(1)
  ],
};