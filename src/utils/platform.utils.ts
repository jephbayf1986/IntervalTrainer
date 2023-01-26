import { Platform } from "react-native";

export const GetIosPlatformVersion = (): number => {
  if (Platform.OS != "ios") {
    return 0;
  }

  return parseInt(Platform.Version, 10);
};
