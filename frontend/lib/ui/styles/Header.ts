import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    display: "flex",
    padding: 0,
    gap: 212,
    position: "absolute",
    width: "100%",
    height: 46,
    top: 25.5,
  },
  menuDots: {
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 24,
    height: 24,
    gap: 12,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "white",
    borderRadius: 4,
  },
  logo: {
    width: 46,
    height: 46,
  },
});

export default headerStyles;
