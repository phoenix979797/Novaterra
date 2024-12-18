import { StyleSheet } from "react-native";

const tabBarStyles = StyleSheet.create({
  tabbarContainer: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    display: "flex",
  },
  tabbarHome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabbarHomeIcon: {
    width: 39,
    height: 39,
    position: "absolute",
  },
});

export default tabBarStyles;
