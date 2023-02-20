import React, { useEffect, useState } from "react";
import colors from "../../../../../../theme/colors";

import ModalProps from "../../../../../../types/props-bases/ModalProps";
import { WorkoutBlock } from "../../../../../../types/Workout";
import DeleteButton from "../../../../../Buttons/DeleteButton/DeleteButton";
import FormContainer from "../../../../../FormElements/FormContainer/FormContainer";
import { InputNumber } from "../../../../../FormElements/InputNumber/InputNumber";
import InputText from "../../../../../FormElements/InputText/InputText";
import ModalWindow from "../../../../../LayoutElements/ModalWindow/ModalWindow";
import Seperator from "../../../../../LayoutElements/Seperator/Seperator";

export interface WorkoutBlockSettingsModal extends ModalProps {
  workoutBlock: WorkoutBlock;
  onComplete: (workoutBlock: WorkoutBlock) => void;
  allowDelete: boolean;
  onDelete: (workoutBlock: WorkoutBlock) => void;
}

const WorkoutBlockSettingsModal: React.FC<WorkoutBlockSettingsModal> = ({
  isVisible,
  onModalHide,
  onComplete,
  workoutBlock,
  allowDelete,
  onDelete
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
    >
      <FormContainer>
        <InputText 
          label={"Block Name"}
          value={name} 
          onValueChange={setName} 
          labelColour={colors.darkBlue} />
        <InputNumber
          label={"Repeat Block"}
          value={repetitions}
          onValueChange={setRepetitions}
          labelColour={colors.darkBlue}
        />
        <InputNumber
          label={"Pre-Block Wait"}
          value={countdownTimeSeconds}
          onValueChange={setCountdownTimeSeconds}
          labelColour={colors.darkBlue}
        />
        <InputNumber
          label={"Post-Block Rest"}
          value={restTimeSeconds}
          onValueChange={setRestTimeSeconds}
          labelColour={colors.darkBlue}
        />
        <Seperator color={colors.grey}  />
        <DeleteButton itemName="Block" onPress={() => onDelete(workoutBlock)} disabled={!allowDelete} />
      </FormContainer>
    </ModalWindow>
  );
};

export default WorkoutBlockSettingsModal;