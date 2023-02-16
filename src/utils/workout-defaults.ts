import { WorkoutBlock } from "./../types/Workout";
import Workout from "../types/Workout";
import Uuid from "../types/Uuid";

export const defaultWorkoutBlock = (blockNumber: number): WorkoutBlock => {
  return {
    id: new Uuid(),
    name: `Block-${blockNumber}`,
    sets: [],
  }
};

export const defaultWorkout: Workout = {
  id: new Uuid(),
  name: "",
  blocks: [
    defaultWorkoutBlock(1)
  ],
};