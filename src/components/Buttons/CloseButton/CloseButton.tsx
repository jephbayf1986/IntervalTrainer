import React from "react";
import styled from "styled-components/native";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import ButtonProps from "../../../types/props-bases/ButtonProps";

const CloseButton: React.FC<ButtonProps> = ({ colour: color, onPress, disabled }) => {

  const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 5px;
  `;

  return (
    <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon icon={faClose} color={color} size={24} />
    </StyledTouchableOpacity>
  );
};

export default CloseButton;