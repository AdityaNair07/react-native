import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Navbar = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        backgroundColor: "grey",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
      }}
    >
      <Link style={{ color: "white" }} href="/about">
        About
      </Link>
      <Link style={{ color: "white" }} href="/contact">
        Contact
      </Link>
    </View>
  );
};

export default Navbar;
