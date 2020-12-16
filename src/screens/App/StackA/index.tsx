import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../helpers/routes';
import {StackAStackParamList} from './ParamList';
import FeatureAScreen from './FeatureA';
import FeatureBStack from './FeatureB';
import FeatureCStack from './FeatureC';

const Stack = createStackNavigator<StackAStackParamList>();
const StackAStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.StackA.FeatureC.itself}
      headerMode="none">
      <Stack.Screen name={routes.App.StackA.FeatureA} component={FeatureAScreen} />
      <Stack.Screen
        name={routes.App.StackA.FeatureB.itself}
        component={FeatureBStack}
      />
      <Stack.Screen
        name={routes.App.StackA.FeatureC.itself}
        component={FeatureCStack}
      />
    </Stack.Navigator>
  );
};

export default StackAStack;
