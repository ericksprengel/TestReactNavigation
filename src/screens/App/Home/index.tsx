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
      navigation.push(routes.App.StackA.itself, {
        screen: routes.App.StackA.FeatureC.itself,
        params: {
          screen: routes.App.StackA.FeatureC.ProductList,
          params: {
            title: 'asd',
          },
        },
      });
    }}
  />
);

export default HomeScreen;
