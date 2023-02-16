import React from 'react';
import { View } from 'react-native';
import colors from '../../../../../../theme/colors';
import { WorkoutSet } from '../../../../../../types/Workout';
import ArrowButton from '../../../../../Buttons/ArrowButton/ArrowButton';
import { StyledArrowButtonContainer, StyledHeaderDetailsContainer, StyledMainDetailsContainer, StyledSetColour, StyledSetContainer, StyledSetName, StyledSetTime } from './styles/workout-set-designer.styled';

export type IWorkoutSetDesignerProps = {
  set: WorkoutSet;
}

export const WorkoutSetDesigner: React.FC<IWorkoutSetDesignerProps> = ({ 
  set
}) => {
  return (
    <StyledSetContainer>
      <StyledMainDetailsContainer>

        <StyledHeaderDetailsContainer>

          <StyledSetColour setColour={set.colour} />
          <StyledSetName>
            {set.name}
          </StyledSetName>

        </StyledHeaderDetailsContainer>

      </StyledMainDetailsContainer>

      <StyledSetTime>
        {set.timeSeconds}
      </StyledSetTime>

      <StyledArrowButtonContainer>
        <ArrowButton direction='right' color={colors.grey} onPress={() => {}} />
      </StyledArrowButtonContainer>

    </StyledSetContainer>
  );
}