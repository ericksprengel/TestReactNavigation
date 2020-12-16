import {NavigatorScreenParams} from '@react-navigation/native';
import {FullStackNavigationProp} from '../../helpers/navigationHelper';
import routes from '../../helpers/routes';
import {RootScreenNavigationProp} from '../ParamList';
import {StackAStackParamList} from './StackA/ParamList';

export type AppStackParamList = {
  [routes.App.StackA.itself]:
    | NavigatorScreenParams<StackAStackParamList>
    | undefined;
  [routes.App.Home]: undefined;
};

export type AppScreenNavigationProp = FullStackNavigationProp<
  AppStackParamList,
  RootScreenNavigationProp
>;
