//Component imports
import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from '../features/Home/index.js';
import Feed from '../features/Feed/containers/index.js';
import CreateEvent from '../features/CreateEvent/index.js';
import Map from '../features/Exploration/Map/index.js';
import Explore from '../features/Exploration/Explore/index.js';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
