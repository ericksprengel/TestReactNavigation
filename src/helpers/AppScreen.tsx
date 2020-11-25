import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import navigationHelper from './navigationHelper';
import {ROUTE_LIST} from './routes';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface AppScreenProps {
  name?: string;
  navigation: any;
  onCustomAction?: () => void;
}
const AppScreen = ({
  name = 'Eita',
  navigation,
  onCustomAction,
}: AppScreenProps) => (
  <View style={styles.root}>
    <Text>App - {name}</Text>
    <Text>Custom action</Text>
    <Button onPress={() => onCustomAction?.()} title="Custom action" />
    <Text>Default nav actions:</Text>
    <Button onPress={() => navigation.pop()} title="pop" />
    <Button onPress={() => navigation.goBack()} title="goBack" />
    <Button onPress={() => navigation.popToTop()} title="popToTop" />
    <Text>Rotas:</Text>
    {ROUTE_LIST.map((route) => (
      <Button
        key={route}
        onPress={() => navigationHelper(navigation, route)}
        title={`Go to ${route}`}
      />
    ))}
  </View>
);

export default AppScreen;
