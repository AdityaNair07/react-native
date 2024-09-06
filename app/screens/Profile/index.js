import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import Login from "../Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileSetting from "../ProfileSetting";

const Stack = createNativeStackNavigator();

const Profile = ({ route, navigation }) => {
  return (
    <>
      <Header title={"Profile Page"} />
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={"../../assets/images/samurai.jpg"}
          resizeMode="cover"
          style={styles.relativeContainer}
        >
          <Image
            style={{
              position: "absolute",
              bottom: "0%",
              left: "50%",
              transform: [{ translateX: "-50%" }, { translateY: "50%" }],
              marginTop: 20,
              paddingVertical: 20,
              height: 100,
              width: 100,
              borderRadius: 100,
              objectFit: "cover",
              borderWidth: 10,
              borderColor: "skyblue",
              backgroundColor: "white",
              zIndex: 20,
            }}
            source={"../../assets/images/react-logo.png"}
            alt="some image"
          />
        </ImageBackground>
        <View
          style={{
            position: "relative",
            zIndex: -1,
            width: "100%",
            height: "100%",
            paddingTop: 80,
            paddingHorizontal: 20,
            backgroundColor: "skyblue",
            gap: 20,
          }}
        >
          <Button
            onPress={() => navigation.navigate("ProfileSetting")}
            title="Profile Settings"
          />
          <Button onPress={() => navigation.navigate("Login")} title="Login" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  relativeContainer: {
    width: "100%",
    height: 200,
    position: "relative",
  },
});

const ProfileScreen = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileScreen;
