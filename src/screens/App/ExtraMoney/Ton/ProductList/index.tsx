import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {ProductListScreenProps} from '../ParamList';

const ProductListScreen = ({route, navigation}: ProductListScreenProps) => (
  <AppScreen
    name={`ExtraMoney - Ton - ProductList - ${route.params.title}`}
    navigation={navigation}
    onCustomAction={() => {
      navigation.push(routes.App.ExtraMoney.Sky.itself, {
        screen: routes.App.ExtraMoney.Sky.EmailInput,
        params: {
          email: 'mail@ton.com.br',
        },
      });
    }}
  />
);

export default ProductListScreen;
