import {
  FullStackNavigationProp,
  ScreenProps,
} from '../../../../helpers/navigationHelper';
import routes from '../../../../helpers/routes';
import {StackAScreenNavigationProp} from '../ParamList';

export type FeatureBStackParamList = {
  [routes.App.StackA.FeatureB.Onboarding]: undefined;
  [routes.App.StackA.FeatureB.EmailInput]: {
    email: string;
  };
};

export type FeatureBScreenNavigationProp = FullStackNavigationProp<
  FeatureBStackParamList,
  StackAScreenNavigationProp
>;

export type EmailInputScreenProps = ScreenProps<
  FeatureBStackParamList,
  StackAScreenNavigationProp,
  typeof routes.App.StackA.FeatureB.EmailInput
>;
