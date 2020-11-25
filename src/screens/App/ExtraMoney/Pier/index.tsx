import React from 'react';
import AppScreen from '../../../../helpers/AppScreen';
import {ExtraMoneyScreenNavigationProp} from '../ParamList';

export interface PierScreenProps {
  navigation: ExtraMoneyScreenNavigationProp;
}

const PierScreen = ({navigation}: PierScreenProps) => (
  <AppScreen name="ExtraMoney - Pier" navigation={navigation} />
);

export default PierScreen;
