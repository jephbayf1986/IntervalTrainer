import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppNavigationParams from '../AppNavigationParams';

const useAppNavigation = () => {
    return useNavigation<NavigationProp<AppNavigationParams>>();
}

export default useAppNavigation;