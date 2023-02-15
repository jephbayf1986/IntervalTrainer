import React, { useState } from "react";

import AppContainerWithHeader from "../../components/AppContainer/AppContainerWithHeader";
import TickButton from "../../components/FormElements/TickButton/TickButton";
import WorkoutDesigner from "../../components/WorkoutDesigner/WorkoutDesigner";
import colors from "../../theme/colors";
import Workout from "../../types/Workout";
import { defaultWorkout } from "../../utils/workout-defaults";

const CreateWorkout: React.FC = () => {

  const [canComplete, setCanComplete] = useState<boolean>(false);

  const [workout, setWorkout] = useState<Workout>(defaultWorkout);

  const onUpdateWorkout = (workout: Workout, isValid: boolean) => {
    setCanComplete(isValid);
    setWorkout(workout);
  }

  const createWorkout = () => {
    
  }

  return (
    <AppContainerWithHeader backgroundColor={colors.darkBlue}>
      <TickButton disabled={!canComplete} onClick={createWorkout} />
      <WorkoutDesigner workout={workout} onUpdateWorkout={onUpdateWorkout}  />
    </AppContainerWithHeader>
  );
};

export default CreateWorkout;