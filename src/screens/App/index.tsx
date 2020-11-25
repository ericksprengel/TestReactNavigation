import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../helpers/routes';
import {AppStackParamList} from './ParamList';
import HomeScreen from './Home';
import ExtraMoneyStack from './ExtraMoney';

const Stack = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.App.Home} headerMode="none">
      <Stack.Screen
        name={routes.App.ExtraMoney.itself}
        component={ExtraMoneyStack}
      />
      <Stack.Screen name={routes.App.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
