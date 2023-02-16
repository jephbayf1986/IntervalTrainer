import { ParamListBase } from '@react-navigation/native';
import Workout from './../types/Workout';

interface AppNavigationParams extends ParamListBase {
  Home: undefined;
  CreateWorkout: undefined;
  UpdateWorkout: undefined, //{ workout: Workout };
  RunWorkout: undefined, //{ workout: Workout };
};

export default AppNavigationParams;