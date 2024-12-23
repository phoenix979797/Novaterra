import { AppBar } from "@/lib/ui";
import { Stack } from "expo-router";

export default function AppBarLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "flip",
        header: (props) => <AppBar navProps={props} children={undefined} />,
      }}
    >
      <Stack.Screen name="profile_data" options={{ title: "Personal Data" }} />
    </Stack>
  );
}
