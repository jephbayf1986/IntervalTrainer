import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export interface INavigationMeta<T extends ParamListBase> {
  name: keyof T;
  component: React.ComponentType | React.ComponentType<any>;
  options?: NativeStackNavigationOptions ;
}