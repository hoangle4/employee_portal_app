import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Text
} from "react-native";
export default function SignInScreen(props) {
  const _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    props.navigation.navigate("App");
  };
  const _signUpAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    props.navigation.navigate("App");
  };
  return (
    <View style={styles.container}>
      <Button title='Sign In' onPress={_signInAsync} />
      <Button title='Sign Up' onPress={_signUpAsync} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
