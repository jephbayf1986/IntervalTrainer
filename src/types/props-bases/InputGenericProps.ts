import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputGenericProps<T> = {
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

export default InputGenericProps;