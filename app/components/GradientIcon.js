import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const GradientIcon = ({ iconName, size, colors, start, end }) => {
  return (
    <View style={{ width: size, height: size }}>
      {/* LinearGradient as background */}
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={StyleSheet.absoluteFill}
      />
      {/* Icon with transparent color */}
      <Icon
        name={iconName}
        size={size}
        color={"transparent"}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default GradientIcon;
