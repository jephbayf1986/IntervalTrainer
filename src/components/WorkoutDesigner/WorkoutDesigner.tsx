import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import Workout, { WorkoutBlock } from "../../types/Workout";
import FormContainer from "../FormElements/FormContainer/FormContainer";
import InputBox from "../FormElements/InputBox/InputBox";
import RenderIf from "../LayoutElements/RenderIf/RenderIf";
import Seperator from "../LayoutElements/Seperator/Seperator";
import WorkoutBlockDesigner from "./components/WorkoutBlockDesigner/WorkoutBlockDesigner";

export type IWorkoutDesignerProps = {
  workout: Workout;
  onUpdateWorkout: (workout: Workout, isValid: boolean) => void;
};

const WorkoutDesigner: React.FC<IWorkoutDesignerProps> = ({ workout, onUpdateWorkout }) => {

  const [editWorkoutName, setEditWorkoutName] = useState<boolean>(false);

  const onStartSetEditWorkoutName = () => {
    const isNewWorkout = workout.name.length == 0;
    setEditWorkoutName(isNewWorkout);
  }

  const setWorkoutName = (name: string) => {
    onUpdateWorkout({...workout, name: name}, true);
  }

  const nameReadOnlyDisplay = <Text>{workout.name}</Text>

  const onUpdateBlock = (workoutBlock: WorkoutBlock) => {

    const newBlockList = [...workout.blocks.filter(x => x.id != workoutBlock.id), workoutBlock]

    onUpdateWorkout({...workout, blocks: newBlockList}, true);
  }

  useEffect(onStartSetEditWorkoutName, [])

  return (
    <FormContainer>
      <RenderIf condition={editWorkoutName} elseDisplay={nameReadOnlyDisplay}>
        <InputBox
            label="Workout Name"
            placeholderText="Enter Workout Name"
            value={workout.name}
            onValueChange={setWorkoutName}
        />
      </RenderIf>
      <Seperator />
      {workout.blocks.map((block, i) => <WorkoutBlockDesigner key={i} workoutBlock={block} onUpdateBlock={onUpdateBlock} />)}
    </FormContainer>
  );
};

export default WorkoutDesigner;