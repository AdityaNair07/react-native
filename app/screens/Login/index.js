import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../components/Header";

const Login = ({ navigation }) => {
  return (
    <>
      <Header inStack={true} title={"Login"} navigation={navigation} />
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "lightblue",
          paddingTop: 20,
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <TextInput
          placeholder="Enter Your Full Name"
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        />
        <Button title="Login" onPress={() => navigation.navigate("Profile")} />
      </SafeAreaView>
    </>
  );
};

export default Login;
