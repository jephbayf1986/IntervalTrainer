import React from "react";
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styled from "styled-components/native";
import ButtonProps from "../../../types/props-bases/ButtonProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IArrowButtonProps extends ButtonProps {
  direction: "up" | "down" | "left" | "right";
}

const ArrowButton: React.FC<IArrowButtonProps> = ({ direction, color, onPress, disabled }) => {

  const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 5px;
  `;

  const icon = (direction: "up" | "down" | "left" | "right"): IconProp => {

    switch (direction) {
        case 'up':
          return faChevronUp;
        case 'down':
            return faChevronDown;
        case 'left':
            return faChevronLeft;
        default:
            return faChevronRight 
    }
  }

  return (
    <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon icon={icon(direction)} color={color} size={24} />
    </StyledTouchableOpacity>
  );
};

export default ArrowButton;
