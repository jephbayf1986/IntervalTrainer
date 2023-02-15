import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { WorkoutBlock } from "../../../../types/Workout";
import RenderIf from "../../../LayoutElements/RenderIf/RenderIf";
import { WorkoutSetDesigner } from "./components/WorkoutSetDesigner.tsx/WorkoutSetDesigner";
import {
  StyledBlockContainer,
  StyledBlockInnerContainer,
  StyledBlockRepeater,
  StyledBlockRepeaterContainer,
  StyledBlockSettingsButton,
  StyledBlockTitle,
} from "./styles/workout-block-designer.styled";
import colors from "../../../../theme/colors";

export type IWorkoutBlockDesignerProps = {
  workoutBlock: WorkoutBlock;
};

const WorkoutBlockDesigner: React.FC<IWorkoutBlockDesignerProps> = ({
  workoutBlock,
}) => {
  return (
    <StyledBlockContainer>
      
      <StyledBlockSettingsButton>
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

      <RenderIf condition={(workoutBlock.repititions ?? 0) > 0}>
        <StyledBlockRepeaterContainer>
          <StyledBlockRepeater>
            x {workoutBlock.repititions}
          </StyledBlockRepeater>
        </StyledBlockRepeaterContainer>
      </RenderIf>

    </StyledBlockContainer>
  );
};

export default WorkoutBlockDesigner;
