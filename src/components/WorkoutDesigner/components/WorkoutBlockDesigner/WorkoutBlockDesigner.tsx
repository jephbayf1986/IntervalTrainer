import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { WorkoutBlock } from "../../../../types/Workout";
import {
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

export type IWorkoutBlockDesignerProps = {
  workoutBlock: WorkoutBlock;
  onUpdateBlock: (workoutBlock: WorkoutBlock) => void;
};

const WorkoutBlockDesigner: React.FC<IWorkoutBlockDesignerProps> = ({
  workoutBlock,
  onUpdateBlock
}) => {
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);

  return (
    <>
      <WorkoutBlockSettingsModal 
        isVisible={editModalIsVisible}
        onModalHide={() => setEditModalIsVisible(false)}
        workoutBlock={workoutBlock} 
        onComplete={onUpdateBlock}
      />

      <StyledBlockContainer>

        <StyledBlockSettingsButton onPress={() => setEditModalIsVisible(true)}>
          <FontAwesomeIcon icon={faCog} size={30} color={colors.textLight} />
        </StyledBlockSettingsButton>

        <StyledBlockInnerContainer>
          <StyledBlockTitle>{workoutBlock.name}</StyledBlockTitle>
          <RenderIf condition={workoutBlock.sets.length > 0}>
            {workoutBlock.sets.map((set, i) => (
              <WorkoutSetDesigner />
            ))}
          </RenderIf>
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
