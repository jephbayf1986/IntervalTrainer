import INavigationGroup from './types/INavigationGroup';
import CreateWorkout from "../pages/CreateWorkout/CreateWorkout";
import Overview from "../pages/Overview/Overview";
import RunWorkout from "../pages/RunWorkout/RunWorkout";
import UpdateWorkout from "../pages/UpdateWorkout/UpdateWorkout";
import AppNavigationParams from './AppNavigationParams';
import globalPageOptions, { sharedPageOptions as workoutPageOptions } from './app-navigation-options';

const appNavigationTree: INavigationGroup<AppNavigationParams>[] = [
  {
    name: 'Home Overview',
    options: globalPageOptions,
    pages: [
      {
        name: 'Home',
        component: Overview,
        additionalOptions: { title: 'Your Overview', headerShown: false },
      }
    ]
  },
  {
    name: 'Workout Pages', 
    options: workoutPageOptions,
    pages: [
      {
        name: 'CreateWorkout', 
        component: CreateWorkout, 
        additionalOptions: { title: 'Create a new workout' }
      },
      {
        name: 'UpdateWorkout', component: UpdateWorkout
      },
      { name: 'RunWorkout', component: RunWorkout }
    ]
  }
];

export default appNavigationTree;