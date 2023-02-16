import React, { useEffect, useState } from "react";

import colors from "../../../theme/colors";
import InputBoxProps from "../../../types/props-bases/InputBoxProps";
import InputContainer from "../InputContainer/InputContainer";
import StyledTextNumber from "./styles/input-number.styled";

export const InputNumber: React.FC<InputBoxProps<number>> = (props) => {
    
  const { value, onValueChange, textColour, placeholderText } = props;

  const [valueAsString, setValueAsString] = useState<string>("");

  const setInitialValueAsString = () => {
    setValueAsString(String(value));
  };

  const isNumeric = (value: string | number): boolean => {
    return value != null && value !== "" && !isNaN(Number(value.toString()));
  };

  const onChangeText = (value: string): void => {

    if (value == '') {
      setValueAsString('');
      return;
    }
    
    if (isNumeric(value))
      setValueAsString(value);
    else 
      setValueAsString(value);

    onValueChange(Number(value));
  };

  useEffect(setInitialValueAsString, []);

  return (
    <InputContainer {...props}>
      <StyledTextNumber
        value={valueAsString}
        keyboardType={"numeric"}
        onChangeText={onChangeText}
        textColour={textColour ?? colors.darkBlue}
        placeholder={placeholderText}
      />
    </InputContainer>
  );
};
