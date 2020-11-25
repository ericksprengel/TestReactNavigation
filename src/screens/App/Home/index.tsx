import React from 'react';
import AppScreen from '../../../helpers/AppScreen';
import routes from '../../../helpers/routes';
import {AppScreenNavigationProp} from '../ParamList';

export interface HomeScreenProps {
  navigation: AppScreenNavigationProp;
}

const HomeScreen = ({navigation}: HomeScreenProps) => (
  <AppScreen
    name="Home"
    navigation={navigation}
    onCustomAction={() => {
      navigation.push(routes.App.ExtraMoney.itself, {
        screen: routes.App.ExtraMoney.Ton.itself,
        params: {
          screen: routes.App.ExtraMoney.Ton.ProductList,
          params: {title: 'eita'},
        },
      });
    }}
  />
);

export default HomeScreen;
