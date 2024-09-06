// import React, { useEffect, useState } from "react";
// import { Button, View, Text } from "react-native";
// import * as Google from "expo-auth-session/providers/google";
// import { makeRedirectUri } from "expo-auth-session";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as WebBrowser from "expo-web-browser";

// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const WebClientId =
//     "81354261111-vp9svadl9fa265eutnamfe9jecsiu35n.apps.googleusercontent.com";
//   const iosClientId =
//     "81354261111-2th2o6kaamlvgd68es6e440o017tg68n.apps.googleusercontent.com";
//   const androidClientId =
//     "81354261111-ib32uf4uvejduhgpcqsthbg6889sjd0i.apps.googleusercontent.com";

//   const [userInfo, setUserInfo] = useState(null);

//   const [request, response, promptAsync] = Google.useAuthRequest({
//     androidClientId: androidClientId,
//     iosClientId: iosClientId,
//     webClientId: WebClientId,
//     redirectUri: makeRedirectUri({
//       useProxy: true, // Keep true for managed workflow
//     }),
//     scopes: ["openid", "profile", "email"],
//   });

//   useEffect(() => {
//     // Handle the authentication response
//     if (response?.type === "success") {
//       const { authentication } = response;
//       getUserInfo(authentication.accessToken);
//     }
//   }, [response]);

//   async function getUserInfo(token) {
//     if (!token) return;

//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/userinfo/v2/me",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const user = await response.json();
//       await AsyncStorage.setItem("@user", JSON.stringify(user));
//       setUserInfo(user);
//     } catch (error) {
//       console.log("Error fetching user info:", error);
//     }
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "grey",
//         padding: 10,
//       }}
//     >
//       <Text>{userInfo ? `Welcome, ${userInfo.name}` : "Please sign in"}</Text>
//       <Button
//         color={"teal"}
//         title="Sign in with Google"
//         disabled={!request}
//         onPress={() => promptAsync()}
//       />
//     </View>
//   );
// }

import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import Navbar from "./components/Navbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Notifications from "./screens/Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./screens/Profile";

const Stack = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();

const App = () => {
  const { colors } = useTheme();

  return (
    // <NavigationContainer independent={true}>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#f4511e",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ headerTitle: "Home Page", headerTitleAlign: "center" }}
    //     />
    //     <Stack.Screen
    //       name="About"
    //       component={About}
    //       options={{
    //         title: "About Page",
    //         headerTitleAlign: "center",
    //         headerRight: () => (
    //           <Button
    //             title="Profile"
    //             color="red"
    //             onPress={() => alert("Button clicked")}
    //           />
    //         ),
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Contact"
    //       component={Contact}
    //       options={{ title: "Contact Page", headerTitleAlign: "center" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer independent={true}>
      <BottomNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "About") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "notifications-circle"
                : "notifications-circle-outline";
            } else {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            color: colors.primary,
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <BottomNavigator.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <BottomNavigator.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
        <BottomNavigator.Screen
          name="Notifications"
          component={Notifications}
          options={({ route }) => ({
            headerShown: false,
            tabBarBadge: 3,
          })}
        />
        <BottomNavigator.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
