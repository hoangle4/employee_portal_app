import React, { useEffect, useContext } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import AuthContext from "../../context/auth/AuthContext";
export default function AuthLoadingScreen(props) {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
  }, []);

  props.navigation.navigate(authContext.isAuthenticated ? "App" : "Auth");

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
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
