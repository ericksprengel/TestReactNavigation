import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../helpers/routes';
import {RootStackParamList} from './ParamList';
import AppStack from './App';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.App.itself} headerMode="none">
        <Stack.Screen name={routes.App.itself} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
