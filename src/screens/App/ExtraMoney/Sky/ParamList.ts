import {
  FullStackNavigationProp,
  ScreenProps,
} from '../../../../helpers/navigationHelper';
import routes from '../../../../helpers/routes';
import {ExtraMoneyScreenNavigationProp} from '../ParamList';

export type SkyStackParamList = {
  [routes.App.ExtraMoney.Sky.Onboarding]: undefined;
  [routes.App.ExtraMoney.Sky.EmailInput]: {
    email: string;
  };
};

export type SkyScreenNavigationProp = FullStackNavigationProp<
  SkyStackParamList,
  ExtraMoneyScreenNavigationProp
>;

export type EmailInputScreenProps = ScreenProps<
  SkyStackParamList,
  ExtraMoneyScreenNavigationProp,
  typeof routes.App.ExtraMoney.Sky.EmailInput
>;
