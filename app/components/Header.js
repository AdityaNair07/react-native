import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation, inStack }) => {
  return (
    <LinearGradient
      colors={["#ff6a00", "#ff0000"]}
      style={{
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={[
          {
            width: "100%",
            paddingVertical: 10,
            flex: 1,
            textAlign: "center",
          },
          inStack && { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        {inStack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" color={"white"} size={20} />
          </Pressable>
        )}
        <Text
          style={[
            {
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 40,
              color: "white",
              fontSize: "1rem",
            },
            inStack && { marginHorizontal: "auto" },
          ]}
        >
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
