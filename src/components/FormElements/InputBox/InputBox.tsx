import React from "react";

import colors from "../../../theme/colors";
import InputBoxProps from "../../../types/props-bases/InputBoxProps";
import InputContainer from "../InputContainer/InputContainer";
import StyledTextInput from "./styles/input-box.styled";

const InputBox: React.FC<InputBoxProps<string>> = (props) => {

  const { value, onValueChange, textColour, placeholderText } = props;

  return (
    <InputContainer {...props}>
      <StyledTextInput
        value={value}
        onChangeText={onValueChange}
        textColour={textColour ?? colors.darkBlue}
        placeholder={placeholderText}
      />
    </InputContainer>
  );
};

export default InputBox;