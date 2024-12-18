/**
 * Styles
 */

import { StyleSheet } from "react-native";
import headerStyles from "./Header";
import backgroundStyles from "./Background";
import tabBarStyles from "./TabBar";

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 4,
  },
});

export { styles, headerStyles, backgroundStyles, tabBarStyles };
