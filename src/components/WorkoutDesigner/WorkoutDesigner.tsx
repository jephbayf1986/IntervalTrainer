import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import colors from "../../theme/colors";

import Workout, { WorkoutBlock } from "../../types/Workout";
import { defaultWorkoutBlock } from "../../utils/workout-defaults";
import AddButton from "../Buttons/AddButton/AddButton";
import FormContainer from "../FormElements/FormContainer/FormContainer";
import InputText from "../FormElements/InputText/InputText";
import RenderIf from "../LayoutElements/RenderIf/RenderIf";
import Seperator from "../LayoutElements/Seperator/Seperator";
import WorkoutBlockDesigner from "./components/WorkoutBlockDesigner/WorkoutBlockDesigner";
import { StyledAddButtonContainer, StyledScrollView } from "./styles/workout-designer.styled";

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

  const addNewBlock = () => {

    const currentBlocks = workout.blocks;
    const numberOfBlocks = currentBlocks.length;
    const newBlock = defaultWorkoutBlock(numberOfBlocks + 1);

    onUpdateWorkout({...workout, blocks: [...currentBlocks, newBlock]}, true);
  }

  const blockOrderAscending = (a: WorkoutBlock, b: WorkoutBlock): number => {
    return a.order - b.order;
  }

  useEffect(onStartSetEditWorkoutName, [])

  return (
    <FormContainer>
      <RenderIf condition={editWorkoutName} elseDisplay={nameReadOnlyDisplay}>
        <InputText
            label="Workout Name"
            placeholderText="Enter Workout Name"
            value={workout.name}
            onValueChange={setWorkoutName}
        />
      </RenderIf>
      <Seperator />
      <StyledScrollView>
        {workout.blocks.sort(blockOrderAscending).map((block) => <WorkoutBlockDesigner key={block.id.toString()} workoutBlock={block} onUpdateBlock={onUpdateBlock} />)}
        <StyledAddButtonContainer>
          <AddButton onPress={addNewBlock} color={colors.textLight}  />
        </StyledAddButtonContainer>
      </StyledScrollView>
    </FormContainer>
  );
};

export default WorkoutDesigner;