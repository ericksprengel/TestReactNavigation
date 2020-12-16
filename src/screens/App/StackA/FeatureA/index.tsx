import React from 'react';
import AppScreen from '../../../../helpers/AppScreen';
import {StackAScreenNavigationProp} from '../ParamList';

export interface FeatureAScreenProps {
  navigation: StackAScreenNavigationProp;
}

const FeatureAScreen = ({navigation}: FeatureAScreenProps) => (
  <AppScreen name="StackA - FeatureA" navigation={navigation} />
);

export default FeatureAScreen;
