import React, { useEffect, useState } from "react";

import colors from "../../../../../../../../theme/colors";

import ModalProps from "../../../../../../../../types/props-bases/ModalProps";
import { WorkoutSet } from "../../../../../../../../types/Workout";
import DeleteButton from "../../../../../../../Buttons/DeleteButton/DeleteButton";
import FormContainer from "../../../../../../../FormElements/FormContainer/FormContainer";
import InputText from "../../../../../../../FormElements/InputText/InputText";
import ModalWindow from "../../../../../../../LayoutElements/ModalWindow/ModalWindow";
import Seperator from "../../../../../../../LayoutElements/Seperator/Seperator";

export interface IWorkoutSetSettingsModalProps extends ModalProps {
  workoutSet: WorkoutSet;
  onComplete: (workoutBlock: WorkoutSet) => void;
  allowDelete: boolean;
  onDelete: (workoutBlock: WorkoutSet) => void;
}

const WorkoutSetSettingsModal: React.FC<IWorkoutSetSettingsModalProps> = ({
  isVisible,
  onModalHide,
  workoutSet,
  onComplete,
  allowDelete,
  onDelete,
}) => {
  const [name, setName] = useState<string>("");

  const onModalConfirm = () => {
    onComplete({
      ...workoutSet,
      name,
    });
  };

  const initialiseModal = () => {
    setName(workoutSet.name ?? '');
  }

  useEffect(initialiseModal, [ workoutSet ]);

  return (
    <ModalWindow
      isVisible={isVisible}
      onModalHide={onModalHide}
      title={`${workoutSet.name ?? "Set"} configuration`}
      textColor={colors.darkBlue}
      onConfirm={onModalConfirm}
    >
      <FormContainer>
        <InputText
          label={"Set Name"}
          value={name}
          onValueChange={setName}
          labelColour={colors.darkBlue}
        />
        <Seperator color={colors.grey} />
        <DeleteButton
          itemName="Set"
          onPress={() => onDelete(workoutSet)}
          disabled={!allowDelete}
        />
      </FormContainer>
    </ModalWindow>
  );
};

export default WorkoutSetSettingsModal;
