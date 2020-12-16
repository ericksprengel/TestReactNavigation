import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../helpers/routes';
import {AppStackParamList} from './ParamList';
import HomeScreen from './Home';
import StackAStack from './StackA';

const Stack = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.App.Home} headerMode="none">
      <Stack.Screen
        name={routes.App.StackA.itself}
        component={StackAStack}
      />
      <Stack.Screen name={routes.App.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
