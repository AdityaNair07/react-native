import { View, Text, Button } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";

const About = ({ route, navigation }) => {
  // const { name, age } = route.params;
  return (
    <>
      <Header title={"About Page"} />
      <View style={{ flex: 1, flexDirection: "column", gap: 20, padding: 20 }}>
        <Text>About Page</Text>
        {/* <Text>{JSON.stringify(name)}</Text>
      <Text>{JSON.stringify(age)}</Text>
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate("Contact", { phone: "1234567890" })}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
      </View>
    </>
  );
};

export default About;
