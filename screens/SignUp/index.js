import React, { useState, useContext } from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import AuthContext from "../../context/auth/AuthContext";
const SignUp = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    await authContext.register({ email, firstName, lastName, password });
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
        onChangeText={firstName => setFirstName(firstName)}
        value={firstName}
        placeholder='First Name'
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={lastName => setLastName(lastName)}
        value={lastName}
        placeholder='Last Name'
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={password => setPassword(password)}
        value={password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={verifyPassword => setVerifyPassword(verifyPassword)}
        value={verifyPassword}
        placeholder='Verify Password'
        secureTextEntry={true}
      />
      <Button title='Sign Up' onPress={() => registerUser()} />
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderColor: "gray",
    marginBottom: 20,
    marginHorizontal: 40
  }
});
