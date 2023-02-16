import React, { useState } from "react";
import colors from "../../../../../../theme/colors";

import ModalProps from "../../../../../../types/props-bases/ModalProps";
import { WorkoutBlock } from "../../../../../../types/Workout";
import FormContainer from "../../../../../FormElements/FormContainer/FormContainer";
import InputBox from "../../../../../FormElements/InputBox/InputBox";
import { InputNumber } from "../../../../../FormElements/InputNumber/InputNumber";
import ModalWindow from "../../../../../LayoutElements/ModalWindow/ModalWindow";

export interface WorkoutBlockSettingsModal extends ModalProps {
  workoutBlock: WorkoutBlock;
  onComplete: (workoutBlock: WorkoutBlock) => void;
}

const WorkoutBlockSettingsModal: React.FC<WorkoutBlockSettingsModal> = ({
  isVisible,
  onModalHide,
  onComplete,
  workoutBlock,
}) => {

  const [name, setName] = useState<string>(workoutBlock?.name ?? "");
  const [repetitions, setRepetitions] = useState<number>(
    workoutBlock?.repetitions ?? 1
  );
  const [countdownTimeSeconds, setCountdownTimeSeconds] = useState<number>(
    workoutBlock?.countdownTimeSeconds ?? 0
  );
  const [restTimeSeconds, setRestTimeSeconds] = useState<number>(
    workoutBlock?.restTimeSeconds ?? 0
  );

  const onModalConfirm = () => {
    onComplete({
      ...workoutBlock,
      name,
      repetitions,
      countdownTimeSeconds,
      restTimeSeconds,
    });
  };

  return (
    <ModalWindow
      isVisible={isVisible}
      onModalHide={onModalHide}
      title={`${workoutBlock.name ?? "Block"} configuration`}
      textColor={colors.darkBlue}
      onConfirm={onModalConfirm}
      confirmButtonEnabled
    >
      <FormContainer>
        <InputBox 
          value={name} 
          onValueChange={setName} 
          label={"Block Name"}
          labelColour={colors.darkBlue} />
        <InputNumber
          value={repetitions}
          onValueChange={setRepetitions}
          label={"Repeat Block"}
          labelColour={colors.darkBlue}
        />
        <InputNumber
          value={countdownTimeSeconds}
          onValueChange={setCountdownTimeSeconds}
          label={"Pre-Block Wait"}
          labelColour={colors.darkBlue}
        />
        <InputNumber
          value={restTimeSeconds}
          onValueChange={setRestTimeSeconds}
          label={"Post-Block Rest"}
          labelColour={colors.darkBlue}
        />
      </FormContainer>
    </ModalWindow>
  );
};

export default WorkoutBlockSettingsModal;