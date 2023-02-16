import React from "react";
import Modal from "react-native-modal";

import colors from "../../../theme/colors";
import { spaces } from "../../../theme/spaces";
import { HasChildren } from "../../../types/props-bases/HasChildren";
import ModalProps from "../../../types/props-bases/ModalProps";
import CloseButton from "../CloseButton/CloseButton";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import RenderIf from "../RenderIf/RenderIf";
import { Spacer } from "../Spacer/Spacer";
import {
  StyledModalContentContainer,
  StyledModalHeaderContainer,
  StyledModalTitle,
} from "./styles/modal-window.styles";

export interface ModalWindowProps extends ModalProps, HasChildren {
  backgroundColor?: string;
  title?: string;
  textColor?: string;
  onConfirm?: () => void;
  confirmButtonEnabled?: boolean;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  isVisible,
  onModalHide = () => {},
  children,
  backgroundColor = colors.textLight,
  title,
  textColor = colors.darkBlue,
  onConfirm,
  confirmButtonEnabled = true,
}) => {

  const confirmAndClose = () => {

    onConfirm && onConfirm();
    onModalHide();
  }

  return (
    <Modal
      isVisible={isVisible}
      onModalHide={onModalHide}
      onBackButtonPress={onModalHide}
      onBackdropPress={onModalHide}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      onSwipeComplete={onModalHide}
      swipeDirection={"down"}
      animationIn={"slideInUp"}
    >
      <StyledModalContentContainer backgroundColor={backgroundColor}>
        <StyledModalHeaderContainer>
          <CloseButton color={textColor} onPress={onModalHide} />
          <RenderIf condition={title != null}>
            <StyledModalTitle color={textColor}>{title}</StyledModalTitle>
          </RenderIf>
          <RenderIf condition={onConfirm != null} elseDisplay={<Spacer space={spaces.l} />}>
            <ConfirmButton color={textColor} onPress={confirmAndClose} />
          </RenderIf>
        </StyledModalHeaderContainer>
        {children}
      </StyledModalContentContainer>
    </Modal>
  );
};

export default ModalWindow;
