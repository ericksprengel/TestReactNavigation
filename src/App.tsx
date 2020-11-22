import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface AppScreenProps {
  name?: string;
  routes: string[];
  navigation: any;
}
const AppScreen = ({name = 'Eita', routes, navigation}: AppScreenProps) => (
  <View style={styles.root}>
    <Text>App - {name}</Text>
    <Button onPress={() => navigation.pop()} title="pop" />
    <Button onPress={() => navigation.goBack()} title="goBack" />
    <Button onPress={() => navigation.popToTop()} title="popToTop" />
    {routes.map((route) => (
      <Button
        key={route}
        onPress={() => navigation.push(route)}
        title={`Go to ${route}`}
      />
    ))}
  </View>
);

/**
 * D
 * D D
 * D D
 * D
 */


const ROUTES = ['Home', 'Detail'];

const DetailScreen = ({ navigation }) => (
  <AppScreen name="Detail" navigation={navigation} routes={ROUTES} />
);

const HomeScreen = ({ navigation }) => (
  <AppScreen name="Home" navigation={navigation} routes={ROUTES} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
