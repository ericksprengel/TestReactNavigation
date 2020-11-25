import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../../helpers/routes';
import OnboardingScreen from './Onboarding';
import ProductListScreen from './ProductList';
import {TonStackParamList} from './ParamList';

const Stack = createStackNavigator<TonStackParamList>();
const TonStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.ExtraMoney.Ton.Onboarding}
      headerMode="none">
      <Stack.Screen
        name={routes.App.ExtraMoney.Ton.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={routes.App.ExtraMoney.Ton.ProductList}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

export default TonStack;
