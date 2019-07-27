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
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Button title='Sign In' onPress={() => navigate("SignIn")} />
      <Button title='Sign Up' onPress={() => navigate("SignUp")} />
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
