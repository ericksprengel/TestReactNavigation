import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../../helpers/routes';
import OnboardingScreen from './Onboarding';
import ProductListScreen from './ProductList';
import {FeatureCStackParamList} from './ParamList';

const Stack = createStackNavigator<FeatureCStackParamList>();
const FeatureCStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.StackA.FeatureC.Onboarding}
      headerMode="none">
      <Stack.Screen
        name={routes.App.StackA.FeatureC.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={routes.App.StackA.FeatureC.ProductList}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

export default FeatureCStack;
