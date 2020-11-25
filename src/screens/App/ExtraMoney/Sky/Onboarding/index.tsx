import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import {SkyScreenNavigationProp} from '../ParamList';

export interface OnboardingScreenProps {
  navigation: SkyScreenNavigationProp;
}

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => (
  <AppScreen name="ExtraMoney - Ton - Onboarding" navigation={navigation} />
);

export default OnboardingScreen;
