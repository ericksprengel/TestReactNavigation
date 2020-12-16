import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {EmailInputScreenProps} from '../ParamList';

const EmailInputScreen = ({route, navigation}: EmailInputScreenProps) => (
  <AppScreen
    name={`StackA - FeatureB - EmailInput - ${route.params.email}`}
    navigation={navigation}
    onCustomAction={() => {
      navigation.push(routes.App.StackA.FeatureC.itself, {
        screen: routes.App.StackA.FeatureC.ProductList,
        params: {
          title: 'Title from the FeatureB',
        },
      });
    }}
  />
);

export default EmailInputScreen;
