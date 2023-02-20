import React, { useState } from "react";

import colors from "../../../../../../theme/colors";
import { WorkoutSet } from "../../../../../../types/Workout";
import ArrowButton from "../../../../../Buttons/ArrowButton/ArrowButton";
import WorkoutSetSettingsModal from "./components/WorkoutSetSettingsModal/WorkoutSetSettingsModal";
import {
  StyledArrowButtonContainer,
  StyledHeaderDetailsContainer,
  StyledMainDetailsContainer,
  StyledSetColour,
  StyledSetContainer,
  StyledSetName,
  StyledSetTime,
} from "./styles/workout-set-designer.styled";

export type IWorkoutSetDesignerProps = {
  workoutSet: WorkoutSet;
  onUpdateSet: (workoutSet: WorkoutSet) => void;
  allowDelete: boolean;
  onDelete: (workoutSet: WorkoutSet) => void;
};

export const WorkoutSetDesigner: React.FC<IWorkoutSetDesignerProps> = ({
  workoutSet,
  onUpdateSet: onUpdateBlock,
  allowDelete,
  onDelete,
}) => {
  
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);

  return (
    <>
      <WorkoutSetSettingsModal
        isVisible={editModalIsVisible}
        onModalHide={() => setEditModalIsVisible(false)}
        workoutSet={workoutSet}
        onComplete={onUpdateBlock}
        allowDelete={allowDelete}
        onDelete={onDelete}
      />

      <StyledSetContainer>
        <StyledMainDetailsContainer>
          <StyledHeaderDetailsContainer>
            <StyledSetColour setColour={workoutSet.colour} />
            <StyledSetName>{workoutSet.name}</StyledSetName>
          </StyledHeaderDetailsContainer>
        </StyledMainDetailsContainer>

        <StyledSetTime>{workoutSet.timeSeconds}</StyledSetTime>

        <StyledArrowButtonContainer>
          <ArrowButton
            direction="right"
            colour={colors.grey}
            onPress={() => setEditModalIsVisible(true)}
          />
        </StyledArrowButtonContainer>
      </StyledSetContainer>
    </>
  );
};
