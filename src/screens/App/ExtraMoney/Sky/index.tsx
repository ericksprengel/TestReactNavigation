import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../../helpers/routes';
import OnboardingScreen from './Onboarding';
import EmailInputScreen from './EmailInput';
import {SkyStackParamList} from './ParamList';

const Stack = createStackNavigator<SkyStackParamList>();
const SkyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.ExtraMoney.Sky.Onboarding}
      headerMode="none">
      <Stack.Screen
        name={routes.App.ExtraMoney.Sky.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={routes.App.ExtraMoney.Sky.EmailInput}
        component={EmailInputScreen}
      />
    </Stack.Navigator>
  );
};

export default SkyStack;
