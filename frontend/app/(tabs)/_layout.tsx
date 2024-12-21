import { TabLayout } from "@/lib/ui";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: "fade",
        header: (props) => <TabLayout navProps={props} children={undefined} />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="discover" />
    </Stack>
  );
}
