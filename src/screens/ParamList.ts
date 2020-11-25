import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import routes from '../helpers/routes';
import {AppStackParamList} from './App/ParamList';

export type RootStackParamList = {
  [routes.App.itself]: NavigatorScreenParams<AppStackParamList>;
};

export type RootScreenNavigationProp = StackNavigationProp<RootStackParamList>;
