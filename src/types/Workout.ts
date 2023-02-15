type Workout = {
  id: string;
  name: string;
  blocks: WorkoutBlock[];
}

export type WorkoutBlock = {
  countdownTimeSeconds?: number;
  name?: string
  sets: WorkoutSet[];
  repititions?: number;
  restTimeSeconds?: number;
}

export type WorkoutSet = {
  name: string;
  color: string;
  intensity: number;
  timeSeconds: number;
  repetitions: number;
}

export default Workout;