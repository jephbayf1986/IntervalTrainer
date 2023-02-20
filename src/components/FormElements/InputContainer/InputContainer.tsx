import React from "react";
import { FontAwesomeIcon, FontAwesomeIconStyle } from "@fortawesome/react-native-fontawesome";

import colors from "../../../theme/colors";
import { HasChildren } from "../../../types/props-bases/HasChildren";
import InputGenericProps from "../../../types/props-bases/InputGenericProps";
import RenderIf from "../../LayoutElements/RenderIf/RenderIf";
import { Spacer } from "../../LayoutElements/Spacer/Spacer";
import { spaces } from "../../../theme/spaces";
import {
  StyledInputContainer as StyledInputContainer,
  StyledInputLabel as StyledInputLabel,
  StyledInputArea as StyledInputArea,
} from "./styles/input-container.styled";

export interface InputContainerProps extends InputGenericProps<any>, HasChildren {}

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  labelColour = colors.textLight,
  textColour = colors.darkBlue,
  backgroundColour = colors.lightGrey,
  icon,
  isRequired = false,
  isValid = true,
  children,
}) => {
    
  const iconStyle: FontAwesomeIconStyle = {
    color: textColour,
  };

  return (
    <StyledInputContainer>
      <RenderIf condition={label != null}>
        <StyledInputLabel textColour={labelColour}>{label + (isRequired ? ' *' : '')}</StyledInputLabel>
      </RenderIf>
      <StyledInputArea invalid={!isValid} backgroundColour={backgroundColour}>
        <RenderIf condition={icon != null}>
          <FontAwesomeIcon icon={icon ?? "cross"} style={iconStyle} size={24} />
          <Spacer space={spaces.s} />
        </RenderIf>
        {children}
      </StyledInputArea>
    </StyledInputContainer>
  );
};

export default InputContainer;