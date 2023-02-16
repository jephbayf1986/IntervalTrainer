import Uuid from './Uuid'

type Workout = {
  id: Uuid;
  name: string;
  blocks: WorkoutBlock[];
}

export type WorkoutBlock = {
  id: Uuid;
  order: number;
  countdownTimeSeconds?: number;
  name?: string
  sets: WorkoutSet[];
  repetitions?: number;
  restTimeSeconds?: number;
}

export type WorkoutSet = {
  id: Uuid;
  order: number;
  name: string;
  color: string;
  intensity?: number;
  timeSeconds: number;
  repetitions: number;
}

export default Workout;