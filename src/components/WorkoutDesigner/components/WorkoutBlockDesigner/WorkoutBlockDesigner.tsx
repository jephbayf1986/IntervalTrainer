import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { WorkoutBlock, WorkoutSet } from "../../../../types/Workout";
import {
  StyledAddSetButtonContainer,
  StyledBlockContainer,
  StyledBlockInnerContainer,
  StyledBlockRepeater,
  StyledBlockRepeaterContainer,
  StyledBlockSettingsButton,
  StyledBlockTitle,
} from "./styles/workout-block-designer.styled";
import RenderIf from "../../../LayoutElements/RenderIf/RenderIf";
import { WorkoutSetDesigner } from "./components/WorkoutSetDesigner.tsx/WorkoutSetDesigner";
import colors from "../../../../theme/colors";
import WorkoutBlockSettingsModal from "./components/WorkoutBlockSettingsModal/WorkoutBlockSettingsModal";
import AddButton from "../../../Buttons/AddButton/AddButton";
import { defaultWorkoutSet } from "../../../../utils/workout-defaults";

export type IWorkoutBlockDesignerProps = {
  workoutBlock: WorkoutBlock;
  onUpdateBlock: (workoutBlock: WorkoutBlock) => void;
  allowDelete: boolean;
  onDelete: (workoutBlock: WorkoutBlock) => void;
};

const WorkoutBlockDesigner: React.FC<IWorkoutBlockDesignerProps> = ({
  workoutBlock,
  onUpdateBlock,
  allowDelete,
  onDelete
}) => {
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);

  const addNewSet = () => {

    const currentSets = workoutBlock.sets;
    const numberOfSets = currentSets.length;
    const newSet = defaultWorkoutSet(numberOfSets + 1);

    onUpdateBlock({...workoutBlock, sets: [...currentSets, newSet]});
  }

  const onUpdateSet = (workoutSet: WorkoutSet) => {

    const newSets = [ ...workoutBlock.sets.filter(x => x.id != workoutSet.id), workoutSet ]

    onUpdateBlock({...workoutBlock, sets: newSets})
  }

  const onDeleteSet = (workoutSet: WorkoutSet) => {

    const newSets = workoutBlock.sets.filter(x => x.id != workoutSet.id);

    onUpdateBlock({...workoutBlock, sets: newSets})
  }

  const setOrderAscending = (a: WorkoutSet, b: WorkoutSet): number => {
    return a.order - b.order;
  }

  const hasMultipleSets = (): boolean => {
    return workoutBlock.sets.length > 1;
  }

  return (
    <>
      <WorkoutBlockSettingsModal 
        isVisible={editModalIsVisible}
        onModalHide={() => setEditModalIsVisible(false)}
        workoutBlock={workoutBlock} 
        onComplete={onUpdateBlock}
        allowDelete={allowDelete}
        onDelete={onDelete}
      />

      <StyledBlockContainer>

        <StyledBlockSettingsButton onPress={() => setEditModalIsVisible(true)}>
          <FontAwesomeIcon icon={faCog} size={30} color={colors.textLight} />
        </StyledBlockSettingsButton>

        <StyledBlockInnerContainer>
          <StyledBlockTitle>{workoutBlock.name}</StyledBlockTitle>
          <RenderIf condition={workoutBlock.sets.length > 0}>
            {workoutBlock.sets.sort(setOrderAscending).map((set) => (
              <WorkoutSetDesigner 
                key={set.id.toString()}
                workoutSet={set}
                onUpdateSet={onUpdateSet}
                allowDelete={hasMultipleSets()}
                onDelete={onDeleteSet}  
              />
            ))}
          </RenderIf>
          <StyledAddSetButtonContainer>
            <AddButton colour={colors.lightGrey} onPress={addNewSet} />
          </StyledAddSetButtonContainer>
        </StyledBlockInnerContainer>

        <RenderIf condition={(workoutBlock.repetitions ?? 1) > 1}>
          <StyledBlockRepeaterContainer>
            <StyledBlockRepeater>
              x {workoutBlock.repetitions}
            </StyledBlockRepeater>
          </StyledBlockRepeaterContainer>
        </RenderIf>

      </StyledBlockContainer>
    </>
  );
};

export default WorkoutBlockDesigner;
