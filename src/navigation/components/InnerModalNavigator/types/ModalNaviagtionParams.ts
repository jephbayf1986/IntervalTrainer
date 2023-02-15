import { ParamListBase } from "@react-navigation/native";

export interface ModalNaviagtionParams<T extends object> extends ParamListBase {
  ModalSource: undefined;
  Modal: T;
}