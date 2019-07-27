import React, { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Text
} from "react-native";
const SignInScreen = ({ navigation: { navigate } }) => {
  const authContext = useContext(AuthContext);

  if (authContext.isAuthenticated) navigate("App");
  return (
    <View style={styles.container}>
      <Button title='Sign In' onPress={() => navigate("SignIn")} />
      <Button title='Sign Up' onPress={() => navigate("SignUp")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default SignInScreen;
