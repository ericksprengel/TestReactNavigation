import {
  FullStackNavigationProp,
  ScreenProps,
} from '../../../../helpers/navigationHelper';
import routes from '../../../../helpers/routes';
import {StackAScreenNavigationProp} from '../ParamList';

export type FeatureCStackParamList = {
  [routes.App.StackA.FeatureC.Onboarding]: undefined;
  [routes.App.StackA.FeatureC.ProductList]: {
    title: string;
  };
};

export type FeatureCScreenNavigationProp = FullStackNavigationProp<
  FeatureCStackParamList,
  StackAScreenNavigationProp
>;

export type ProductListScreenProps = ScreenProps<
  FeatureCStackParamList,
  StackAScreenNavigationProp,
  typeof routes.App.StackA.FeatureC.ProductList
>;
