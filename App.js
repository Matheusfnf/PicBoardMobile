import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroScreen from "./components/SignUp";
import LoginScreen from "./components/SignIn";
import TakePicture from "./components/TakePicture";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={CadastroScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TakePicture"
          component={TakePicture}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
