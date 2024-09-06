import { View, Text, Button, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const Contact = ({ route, navigation }) => {
  const { phone } = route.params;
  const [input, setInput] = useState("");

  return (
    <View style={{ padding: 20, flex: 1, flexDirection: "column", gap: 20 }}>
      <Text>Contact Page</Text>
      <Text>{JSON.stringify(phone)}</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Text>Update Contact Info</Text>
      <TextInput
        style={{ borderWidth: 2, borderColor: "red" }}
        placeholder="update phone"
        onChangeText={setInput}
      />
      <Button
        title="Update"
        color={"skyblue"}
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { inputText: input },
            merge: true,
          })
        }
      />
    </View>
  );
};

export default Contact;
