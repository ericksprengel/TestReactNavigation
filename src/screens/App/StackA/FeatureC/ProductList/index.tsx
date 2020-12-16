import React from 'react';
import AppScreen from '../../../../../helpers/AppScreen';
import routes from '../../../../../helpers/routes';
import {ProductListScreenProps} from '../ParamList';

const ProductListScreen = ({route, navigation}: ProductListScreenProps) => (
  <AppScreen
    name={`StackA - FeatureC - ProductList - ${route.params.title}`}
    navigation={navigation}
    onCustomAction={() => {
      navigation.push(routes.App.StackA.FeatureB.itself, {
        screen: routes.App.StackA.FeatureB.EmailInput,
        params: {
          email: 'mail@FeatureC.com.br',
        },
      });
    }}
  />
);

export default ProductListScreen;
