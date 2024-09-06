import { View, Text } from "react-native";
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
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            color: "white",
            fontSize: 25,
            paddingTop: 10,
          }}
        >
          Login Page
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Login;
