import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import styled from "styled-components/native";

import colors from "../../../theme/colors";
import ButtonProps from "../../../types/props-bases/ButtonProps";

export interface IDeleteButtonProps extends ButtonProps {
  itemName: string;
  backgroundColor?: string;
}

const DeleteButton: React.FC<IDeleteButtonProps> = ({
  itemName,
  colour,
  backgroundColor,
  onPress,
  disabled
}) => {

  const textColor: string = disabled ? colors.grey : colour ?? colors.textWarning;

  const StyledTouchableOpacity = styled.TouchableOpacity`
    margin: 10px 0;
    padding: 14px;
    display: flex;
    flex-direction: row;
    background-color: ${backgroundColor ?? colors.backgroundWarning}
    justify-content: center;
  `;

  const StyledButtonText = styled.Text`
    color: ${textColor}
    font-size: 20px;
    padding: 0 10px;
  `;

  return (
    <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon icon={faTrash} color={textColor} size={24} />
      <StyledButtonText>Delete This {itemName}</StyledButtonText>
    </StyledTouchableOpacity>
  );
};

export default DeleteButton;