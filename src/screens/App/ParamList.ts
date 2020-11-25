import {NavigatorScreenParams} from '@react-navigation/native';
import {FullStackNavigationProp} from '../../helpers/navigationHelper';
import routes from '../../helpers/routes';
import {RootScreenNavigationProp} from '../ParamList';
import {ExtraMoneyStackParamList} from './ExtraMoney/ParamList';

export type AppStackParamList = {
  [routes.App.ExtraMoney.itself]:
    | NavigatorScreenParams<ExtraMoneyStackParamList>
    | undefined;
  [routes.App.Home]: undefined;
};

export type AppScreenNavigationProp = FullStackNavigationProp<
  AppStackParamList,
  RootScreenNavigationProp
>;
