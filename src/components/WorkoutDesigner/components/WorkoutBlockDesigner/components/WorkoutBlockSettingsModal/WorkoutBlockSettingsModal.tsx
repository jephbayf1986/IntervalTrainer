import React, { useEffect, useState } from "react";
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

  const [name, setName] = useState<string>('');
  const [repetitions, setRepetitions] = useState<number>(1);
  const [countdownTimeSeconds, setCountdownTimeSeconds] = useState<number>(0);
  const [restTimeSeconds, setRestTimeSeconds] = useState<number>(0);

  const onModalConfirm = () => {
    onComplete({
      ...workoutBlock,
      name,
      repetitions,
      countdownTimeSeconds,
      restTimeSeconds,
    });
  };

  const initialiseModal = () => {
    setName(workoutBlock.name ?? '');
    setRepetitions(workoutBlock.repetitions ?? 1);
    setCountdownTimeSeconds(workoutBlock.countdownTimeSeconds ?? 0);
    setRestTimeSeconds(workoutBlock.restTimeSeconds ?? 0);
  }

  useEffect(initialiseModal, [ workoutBlock ]);

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