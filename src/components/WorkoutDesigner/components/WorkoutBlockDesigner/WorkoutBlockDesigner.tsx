import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { WorkoutBlock } from "../../../../types/Workout";
import { StyledBlockContainer, StyledBlockInnerContainer, StyledBlockRepeater, StyledBlockRepeaterContainer, StyledBlockSettingsButton, StyledBlockTitle } from "./styles/workout-block-designer.styled";
import RenderIf from "../../../LayoutElements/RenderIf/RenderIf";
import { WorkoutSetDesigner } from "./components/WorkoutSetDesigner.tsx/WorkoutSetDesigner";
import WorkoutBlockSettingsModal from "./components/WorkoutBlockSettingsModal/WorkoutBlockSettingsModal";
import colors from "../../../../theme/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ModalNaviagtionParams } from "../../../../navigation/components/InnerModalNavigator/types/ModalNaviagtionParams";
import InnerModalNavigator from "../../../../navigation/components/InnerModalNavigator/InnerModalNavigator";

export type IWorkoutBlockDesignerProps = {
  workoutBlock: WorkoutBlock;
};

const WorkoutBlockDesigner: React.FC<IWorkoutBlockDesignerProps> = ({
  workoutBlock,
}) => {

  type ModalParams = { workoutBlock: WorkoutBlock };

  const navigation = useNavigation<NavigationProp<ModalNaviagtionParams<ModalParams>>>()

  return (
    <InnerModalNavigator<ModalParams> modal={WorkoutBlockSettingsModal}>

      <StyledBlockContainer>

        <StyledBlockSettingsButton onPress={() => navigation.navigate('Modal', { workoutBlock })}>
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
    </InnerModalNavigator>
  );
};

export default WorkoutBlockDesigner;
