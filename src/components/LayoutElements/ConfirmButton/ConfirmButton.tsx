import React from "react";
import styled from "styled-components/native";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import ButtonProps from "../../../types/props-bases/ButtonProps";

const ConfirmButton: React.FC<ButtonProps> = ({ color, onPress }) => {
  const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 5px;
  `;

  return (
    <StyledTouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faCheck} color={color} size={24} />
    </StyledTouchableOpacity>
  );
};

export default ConfirmButton;
