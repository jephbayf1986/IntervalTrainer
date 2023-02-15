import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

import { colors } from "../../../theme/colors";
import RenderIf from "../../LayoutElements/RenderIf/RenderIf";
import { StyledInputBoxContainer, StyledInputBoxLabel, StyledTextInput, StyledTextInputContainer } from "./styles/input-box.styled";
import { Spacer } from "../../LayoutElements/Spacer/Spacer";
import { spaces } from "../../../theme/spaces";

export type InputBoxProps = {
  value: string;
  label: string;
  placeholderText: string;
  labelColour?: string;
  textColour?: string;
  backgroundColour?: string;
  icon?: IconProp;
  isRequired?: boolean;
  isValid?: boolean;
  onValueChange: (newValue: string) => void;
};

export const InputBox: React.FC<InputBoxProps> = ({
  value,
  label,
  placeholderText,
  labelColour = colors.textLight,
  textColour = colors.darkBlue,
  backgroundColour = colors.textLight,
  icon,
  isRequired = false,
  isValid = true,
  onValueChange
}) => {

  const iconStyle: FontAwesomeIconStyle = {
    color: textColour
  }

  return (
    <StyledInputBoxContainer>
      <StyledInputBoxLabel textColour={labelColour}>
        {label}
      </StyledInputBoxLabel>
      <StyledTextInputContainer invalid={!isValid} backgroundColour={backgroundColour} >
        <RenderIf condition={icon != null}>
          <FontAwesomeIcon icon={icon ?? 'cross'} style={iconStyle} size={24} />
          <Spacer space={spaces.s} />
        </RenderIf>
        <StyledTextInput value={value} onChangeText={onValueChange} textColour={textColour} placeholder={placeholderText} />
      </StyledTextInputContainer>
    </StyledInputBoxContainer>
  );
};