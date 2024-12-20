import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { TabBar, Background } from "@/lib/ui/components";

export default function NotFoundScreen() {
  return (
    <Background>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
      <TabBar route="dashboard" />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
