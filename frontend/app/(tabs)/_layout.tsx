import { TabLayout } from "@/lib/ui";
import { Stack } from "expo-router";
import { ImageBackground } from "react-native";

export default function Layout() {
  return (
    <ImageBackground
      source={require("@/assets/images/union.png")}
      resizeMode="stretch"
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Stack
        screenOptions={{
          animation: "slide_from_bottom",
          header: (props) => (
            <TabLayout navProps={props} children={undefined} />
          ),
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="discover" />
      </Stack>
    </ImageBackground>
  );
}
