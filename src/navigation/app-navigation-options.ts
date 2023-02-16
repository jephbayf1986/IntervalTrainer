import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import colors from "../theme/colors";

const globalPageOptions: NativeStackNavigationOptions = {
  statusBarStyle: "light",
  statusBarTranslucent: true,
};

export const sharedPageOptions: NativeStackNavigationOptions = {
  ...globalPageOptions,
  headerTransparent: true,
  headerTitleAlign: "center",
  headerTitleStyle: { color: colors.textLight },
  headerTintColor: colors.textLight,
  animation: "slide_from_right",
};

export default globalPageOptions;
