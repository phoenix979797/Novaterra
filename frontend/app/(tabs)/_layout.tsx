import { TabBar } from "@/lib/ui";
import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "flip",
        header: (props) => <TabBar navProps={props} children={undefined} />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="discover" />
    </Stack>
  );
}
