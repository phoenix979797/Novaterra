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
      <Stack.Screen
        name="privacy_settings"
        options={{ title: "Privacy Settings" }}
      />
      <Stack.Screen name="refer_friend" options={{ title: "Refer a Friend" }} />
      <Stack.Screen
        name="transaction_history"
        options={{ title: "Transaction History" }}
      />
      <Stack.Screen
        name="newsletter_subscription"
        options={{ title: "Newletter Subscription" }}
      />
      <Stack.Screen
        name="payment_methods"
        options={{ title: "Payment Methods" }}
      />
      <Stack.Screen
        name="add_payment_method"
        options={{ title: "Add New Payment Methods" }}
      />
      <Stack.Screen name="my_investment" options={{ title: "My Investment" }} />
      <Stack.Screen
        name="promotion_detail"
        options={{ title: "Eco-Friendly Lakefront..." }}
      />
    </Stack>
  );
}
