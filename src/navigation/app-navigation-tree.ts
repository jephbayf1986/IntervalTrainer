import { colors } from './../theme/colors';
import CreateWorkout from "../pages/CreateWorkout/CreateWorkout";
import Overview from "../pages/Overview/Overview";
import RunWorkout from "../pages/RunWorkout/RunWorkout";
import UpdateWorkout from "../pages/UpdateWorkout/UpdateWorkout";
import { INavigationMeta } from "./types/INavigationMeta";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const sharedPageOptions: NativeStackNavigationOptions = {
  headerTransparent: true,
  headerTitleAlign: "center",
  headerTitleStyle: { color: colors.textLight },
  headerTintColor: colors.textLight,
  animation: "slide_from_right",
  statusBarStyle: "light",
  statusBarTranslucent: true
};

export type AppNavigationTreeParamList = {
  Home: undefined;
  CreateWorkout: undefined;
  UpdateWorkout: undefined;
  RunWorkout: undefined;
};

const appNavigationTree: INavigationMeta<AppNavigationTreeParamList>[] = [
  {
    name: "Home",
    component: Overview,
    options: { ...sharedPageOptions, title: "Your Overview", headerShown: false },
  },
  {
    name: "CreateWorkout", 
    component: CreateWorkout, 
    options: { ...sharedPageOptions, title: "Create a new workout" }
  },
  {
    name: "UpdateWorkout", component: UpdateWorkout, options: sharedPageOptions
  },
  { name: "RunWorkout", component: RunWorkout, options: sharedPageOptions },
];

export default appNavigationTree;