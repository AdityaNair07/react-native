import { View, Text, Pressable, Animated, Easing } from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

const Accordion = ({ heading, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    // Animate to either expand or collapse
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1, // 1 when opened, 0 when closed
      duration: 300, // Duration in ms
      easing: Easing.ease, // Easing function
      useNativeDriver: false, // Use native driver for better performance
    }).start();
  };

  // Interpolate height from 0 to the desired value
  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust 100 to the height you want when expanded
  });

  // Optional: Fade in/out animation for text
  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={{ width: "100%", position: "relative" }}>
      <Pressable
        style={[
          isOpen && { borderBottomWidth: 2, borderBottomColor: "grey" },
          {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 7,
            backgroundColor: "white",
            paddingLeft: 10,
            paddingRight: 10,
          },
        ]}
        onPress={toggleAccordion}
      >
        <Text style={{ fontWeight: "600" }}>{heading}</Text>
        {isOpen ? (
          <Ionicons color={"black"} name="chevron-up-outline" size={20} />
        ) : (
          <Ionicons color={"black"} name="chevron-down-outline" size={20} />
        )}
      </Pressable>

      {/* Animated View for expanding and collapsing */}
      <Animated.View
        style={{
          overflow: "hidden", // Ensure content stays inside the container
          height: heightInterpolate, // Control the height animation
          opacity: opacityInterpolate, // Control opacity animation
        }}
      >
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          {desc}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Accordion;
