import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../../helpers/routes';
import OnboardingScreen from './Onboarding';
import EmailInputScreen from './EmailInput';
import {FeatureBStackParamList} from './ParamList';

const Stack = createStackNavigator<FeatureBStackParamList>();
const FeatureBStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.StackA.FeatureB.Onboarding}
      headerMode="none">
      <Stack.Screen
        name={routes.App.StackA.FeatureB.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={routes.App.StackA.FeatureB.EmailInput}
        component={EmailInputScreen}
      />
    </Stack.Navigator>
  );
};

export default FeatureBStack;
