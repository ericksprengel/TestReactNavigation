import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../../../helpers/routes';
import {ExtraMoneyStackParamList} from './ParamList';
import PierScreen from './Pier';
import SkyStack from './Sky';
import TonStack from './Ton';

const Stack = createStackNavigator<ExtraMoneyStackParamList>();
const ExtraMoneyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.App.ExtraMoney.Ton.itself}
      headerMode="none">
      <Stack.Screen name={routes.App.ExtraMoney.Pier} component={PierScreen} />
      <Stack.Screen
        name={routes.App.ExtraMoney.Sky.itself}
        component={SkyStack}
      />
      <Stack.Screen
        name={routes.App.ExtraMoney.Ton.itself}
        component={TonStack}
      />
    </Stack.Navigator>
  );
};

export default ExtraMoneyStack;
