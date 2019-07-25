import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
export default function SignInScreen(props) {
  const _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    props.navigation.navigate("App");
  };
  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={_signInAsync} />
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
