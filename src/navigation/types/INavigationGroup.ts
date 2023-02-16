import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import INavigationPage from './INavigationPage';

interface INavigationGroup<T extends ParamListBase> {
  name?: string;
  options?: NativeStackNavigationOptions ;
  pages: INavigationPage<T>[];
}

export default INavigationGroup