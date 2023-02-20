import React from "react";

import colors from "../../../theme/colors";
import InputGenericProps from "../../../types/props-bases/InputGenericProps";
import InputContainer from "../InputContainer/InputContainer";
import StyledTextInput from "./styles/input-box.styled";

const InputText: React.FC<InputGenericProps<string>> = (props) => {

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

export default InputText;