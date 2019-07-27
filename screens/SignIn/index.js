import React, { useState, useContext } from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import AuthContext from "../../context/auth/AuthContext";
const SignIn = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await authContext.login({ email, password });
  };

  if (authContext.isAuthenticated) navigation.navigate("App");

  return (
    <View>
      <TextInput
        style={styles.inputBox}
        onChangeText={email => setEmail(email)}
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={password => setPassword(password)}
        value={password}
        secureTextEntry={true}
        placeholder='Password'
      />

      <Button title='Sign In' onPress={() => loginUser()} />
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderColor: "gray",
    marginBottom: 20,
    marginHorizontal: 40
  }
});
