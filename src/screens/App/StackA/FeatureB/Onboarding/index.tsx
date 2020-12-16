import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import {FeatureBScreenNavigationProp} from '../ParamList';

export interface OnboardingScreenProps {
  navigation: FeatureBScreenNavigationProp;
}

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => (
  <AppScreen name="StackA - FeatureC - Onboarding" navigation={navigation} />
);

export default OnboardingScreen;
