import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {EmailInputScreenProps} from '../ParamList';

const EmailInputScreen = ({route, navigation}: EmailInputScreenProps) => (
  <AppScreen
    name={`ExtraMoney - Sky - EmailInput - ${route.params.email}`}
    navigation={navigation}
    onCustomAction={() => {
      navigation.push(routes.App.ExtraMoney.Ton.itself, {
        screen: routes.App.ExtraMoney.Ton.ProductList,
        params: {
          title: 'Title from the Sky',
        },
      });
    }}
  />
);

export default EmailInputScreen;
