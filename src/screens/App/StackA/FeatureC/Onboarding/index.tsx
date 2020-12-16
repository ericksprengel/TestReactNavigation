import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {FeatureCScreenNavigationProp} from '../ParamList';

export interface OnboardingScreenProps {
  navigation: FeatureCScreenNavigationProp;
}

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => (
  <AppScreen
    name="StackA - FeatureC - Onboarding"
    navigation={navigation}
    onCustomAction={() => {
      navigation.navigate(routes.App.StackA.FeatureB.itself, {
        screen: routes.App.StackA.FeatureB.EmailInput,
        params: {
          email: 'onboarding@FeatureC.com.br',
        },
      });
    }}
  />
);

export default OnboardingScreen;
