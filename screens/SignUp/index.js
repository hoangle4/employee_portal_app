import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
const SignUp = () => {
  const [email, setEmail] = useState("");
  return (
    <View>
      <TextInput
        style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
        onChangeText={email => setEmail(email)}
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={email => setEmail(email)}
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={email => setEmail(email)}
        value={email}
        placeholder='Email'
      />
    </View>
  );
};

export default SignUp;
