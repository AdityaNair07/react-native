import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";

const Notifications = ({ navigation }) => {
  return (
    <>
      <Header title={"Notification Page"} />
      <View style={{ height: "100%", width: "100%" }}>
        <Text>Notifications Page</Text>
      </View>
    </>
  );
};

export default Notifications;
