import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

interface INavigationPage<T extends ParamListBase> {
  name: keyof T;
  component: React.ComponentType | React.ComponentType<any>;
  additionalOptions?: NativeStackNavigationOptions;
}

export default INavigationPage;
