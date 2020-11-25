import {NavigatorScreenParams} from '@react-navigation/native';
import {FullStackNavigationProp} from '../../../helpers/navigationHelper';
import routes from '../../../helpers/routes';
import {AppScreenNavigationProp} from '../ParamList';
import {SkyStackParamList} from './Sky/ParamList';
import {TonStackParamList} from './Ton/ParamList';

export type ExtraMoneyStackParamList = {
  [routes.App.ExtraMoney.Pier]: undefined;
  [routes.App.ExtraMoney.Sky.itself]: NavigatorScreenParams<SkyStackParamList>;
  [routes.App.ExtraMoney.Ton.itself]: NavigatorScreenParams<TonStackParamList>;
};

export type ExtraMoneyScreenNavigationProp = FullStackNavigationProp<
  ExtraMoneyStackParamList,
  AppScreenNavigationProp
>;
