import {NavigatorScreenParams} from '@react-navigation/native';
import {FullStackNavigationProp} from '../../../helpers/navigationHelper';
import routes from '../../../helpers/routes';
import {AppScreenNavigationProp} from '../ParamList';
import {FeatureBStackParamList} from './FeatureB/ParamList';
import {FeatureCStackParamList} from './FeatureC/ParamList';

export type StackAStackParamList = {
  [routes.App.StackA.FeatureA]: undefined;
  [routes.App.StackA.FeatureB.itself]: NavigatorScreenParams<FeatureBStackParamList>;
  [routes.App.StackA.FeatureC.itself]: NavigatorScreenParams<FeatureCStackParamList>;
};

export type StackAScreenNavigationProp = FullStackNavigationProp<
  StackAStackParamList,
  AppScreenNavigationProp
>;
