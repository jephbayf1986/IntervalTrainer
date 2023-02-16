import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputBoxProps<T> = {
  value: T;
  onValueChange: (newValue: T) => void;
  label?: string;
  placeholderText?: string;
  labelColour?: string;
  textColour?: string;
  backgroundColour?: string;
  icon?: IconProp;
  isRequired?: boolean;
  isValid?: boolean;
};

export default InputBoxProps;