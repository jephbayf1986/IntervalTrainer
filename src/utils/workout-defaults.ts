import { WorkoutBlock } from "./../types/Workout";
import Workout from "../types/Workout";

export const defaultWorkoutBlock = (blockNumber: number): WorkoutBlock => {
  return {
    name: `Block-${blockNumber}`,
    sets: [],
  }
};

export const defaultWorkout: Workout = {
  id: "",
  name: "",
  blocks: [
    defaultWorkoutBlock(1)
  ],
};