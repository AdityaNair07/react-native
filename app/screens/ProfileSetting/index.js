import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../components/Header";

const ProfileSetting = ({ navigation }) => {
  return (
    <>
      <Header
        inStack={true}
        navigation={navigation}
        title={"Profile Settings"}
      />
      <SafeAreaView>
        <Text>Profile Setting Page</Text>
      </SafeAreaView>
    </>
  );
};

export default ProfileSetting;
