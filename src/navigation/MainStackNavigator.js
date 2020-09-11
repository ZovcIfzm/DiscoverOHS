//Component imports
import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import AuthHome from '../features/Auth/screens/AuthHomeScreen';
import Forums from '../features/Forums/screens/ForumScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Forums"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthHome" component={AuthHome} />
        <Stack.Screen name="Forums" component={Forums} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
