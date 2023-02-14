import CreateWorkout from "../pages/CreateWorkout/CreateWorkout";
import Overview from "../pages/Overview/Overview";
import RunWorkout from "../pages/RunWorkout/RunWorkout";
import UpdateWorkout from "../pages/UpdateWorkout/UpdateWorkout";
import { INavigationMeta } from "./types/INavigationMeta";

const sharedPageOptions = {
    headerTransparent: true,
    animation: 'slide_from_right'
}

const appNavigationTree: INavigationMeta[] = [
    { name: "Home", component: Overview, options: { title: "Your Overview", headerShown: false } },
    { name: "CreateWorkout", component: CreateWorkout, options: sharedPageOptions },
    { name: "UpdateWorkout", component: UpdateWorkout, options: sharedPageOptions },
    { name: "RunWorkout", component: RunWorkout, options: sharedPageOptions }
];

export default appNavigationTree;