import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { miscData } from "../../data/misc";

const Home = ({ route, navigation }) => {
  return (
    <ScrollView>
      <Header title={"Home Page"} />
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
          flex: 1,
          gap: 20,
        }}
      >
        <Image
          style={{
            paddingVertical: 20,
            height: 400,
            objectFit: "contain",
          }}
          source={"../../assets/images/ninja.jpg"}
          alt="some image"
        />

        <FlatList
          data={miscData}
          renderItem={({ item }) => (
            <LinearGradient
              colors={["#ff6a00", "#ff0000"]}
              start={{ x: 0.5, y: 0.3 }}
              style={{
                width: "100%",
                paddingVertical: 5,
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: 15,
                  color: "white",
                }}
              >
                {item.name}
              </Text>
            </LinearGradient>
          )}
        />
        {/* {route.params?.inputText != "" && (
          <Text>{JSON.stringify(route.params?.inputText)}</Text>
        )}
        <Button
          color={"red"}
          title="About Us"
          onPress={() =>
            navigation.navigate("About", { name: "Aditya", age: 23 })
          }
        /> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
