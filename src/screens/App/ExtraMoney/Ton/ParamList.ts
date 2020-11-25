import {
  FullStackNavigationProp,
  ScreenProps,
} from '../../../../helpers/navigationHelper';
import routes from '../../../../helpers/routes';
import {ExtraMoneyScreenNavigationProp} from '../ParamList';

export type TonStackParamList = {
  [routes.App.ExtraMoney.Ton.Onboarding]: undefined;
  [routes.App.ExtraMoney.Ton.ProductList]: {
    title: string;
  };
};

export type TonScreenNavigationProp = FullStackNavigationProp<
  TonStackParamList,
  ExtraMoneyScreenNavigationProp
>;

export type ProductListScreenProps = ScreenProps<
  TonStackParamList,
  ExtraMoneyScreenNavigationProp,
  typeof routes.App.ExtraMoney.Ton.ProductList
>;
