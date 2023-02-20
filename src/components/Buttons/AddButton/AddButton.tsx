import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ButtonProps from "../../../types/props-bases/ButtonProps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";

const AddButton: React.FC<ButtonProps> = ({ colour: color, onPress, disabled }) => {
    
  const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 5px;
  `;

  return (
    <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon icon={faPlus} color={color} size={24} />
    </StyledTouchableOpacity>
  );
};

export default AddButton;
