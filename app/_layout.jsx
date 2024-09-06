// import { Stack } from "expo-router";

// export default function RootLayout() {

//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="login/index" />
//     </Stack>
//   );
// }

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    bask: require("../assets/fonts/BaskervvilleSC-Regular.ttf"),
  });
  return <Slot />;
}
