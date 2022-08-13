/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./sreens/HomeScreen";
import DetailScreen from "./sreens/DetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>);
}

export default App;
