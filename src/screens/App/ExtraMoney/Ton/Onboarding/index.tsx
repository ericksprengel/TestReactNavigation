import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {TonScreenNavigationProp} from '../ParamList';

export interface OnboardingScreenProps {
  navigation: TonScreenNavigationProp;
}

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => (
  <AppScreen
    name="ExtraMoney - Ton - Onboarding"
    navigation={navigation}
    onCustomAction={() => {
      navigation.navigate(routes.App.ExtraMoney.Sky.itself, {
        screen: routes.App.ExtraMoney.Sky.EmailInput,
        params: {
          email: 'onboarding@ton.com.br',
        },
      });
    }}
  />
);

export default OnboardingScreen;
