import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";

const AuthStack = createStackNavigator({ SignInScreen, SignUp, SignIn });
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
