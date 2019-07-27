import React, { useEffect, useContext } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import AuthContext from "../../context/auth/AuthContext";
export default function AuthLoadingScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
  }, []);
  if (authContext.isAuthenticated) navigation.navigate("App");

  navigation.navigate("Auth");
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
