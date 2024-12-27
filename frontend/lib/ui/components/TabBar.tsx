import React, { useMemo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { calculateHeight, calculateWidth } from "../../utils";
import { HomeIconColor, HomeIconGray, Logo } from "../svgs";
import { Feather } from "@expo/vector-icons";

export default function TabBar(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      layout: {
        width: "100%",
        height: height,
        position: "absolute",
        zIndex: 1000,
        pointerEvents: "box-none",
      },
      header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: calculateWidth(width, 70),
        top: calculateWidth(width, 44),
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
      },
      menuDots: {
        display: "flex",
        alignItems: "flex-start",
        alignContent: "flex-start",
        padding: 0,
        flexDirection: "row",
        flexShrink: 0,
        flexWrap: "wrap",
        width: calculateWidth(width, 24),
        height: calculateWidth(width, 24),
        gap: calculateWidth(width, 12),
      },
      dot: {
        width: calculateWidth(width, 6),
        height: calculateWidth(width, 6),
        backgroundColor: "white",
        borderRadius: calculateWidth(width, 6),
        flexShrink: 0,
      },
      logo: {
        width: calculateWidth(width, 46),
        height: calculateWidth(width, 46),
      },
      tabbarContainer: {
        position: "absolute",
        bottom: calculateWidth(width, 24),
        left: calculateWidth(width, 16),
        right: calculateWidth(width, 16),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
      },
      tabbarHomeButton: {
        display: "flex",
        width: calculateWidth(width, 59),
        height: calculateWidth(width, 59),
        padding: calculateWidth(width, 3),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
      },
      tabbarHomeIcon: {
        width: calculateWidth(width, 39),
        height: calculateWidth(width, 39),
      },
      tabbarButton: {
        display: "flex",
        width: calculateWidth(width, 59),
        height: calculateWidth(width, 59),
        padding: calculateWidth(width, 3),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
      },
      tabbarBackground: {
        width: calculateWidth(width, 375),
        height: calculateHeight(height, 242),
        flex: 1,
        position: "absolute",
        bottom: 0,
      },
    });
  }, [width, height]);

  const tabs = [
    <TouchableOpacity
      style={styles.tabbarButton}
      onPress={() => props.navProps.navigation.replace("discover")}
      key="discover"
    >
      <Feather
        name="globe"
        size={calculateWidth(width, 24)}
        color={props.navProps.route.name === "discover" ? "white" : "gray"}
      />
    </TouchableOpacity>,
    <TouchableOpacity
      style={styles.tabbarHomeButton}
      onPress={() => props.navProps.navigation.replace("index")}
      key="index"
    >
      {props.navProps.route.name === "index" ? (
        <View style={styles.tabbarHomeIcon}>
          <HomeIconColor />
        </View>
      ) : (
        <View style={styles.tabbarHomeIcon}>
          <HomeIconGray />
        </View>
      )}
    </TouchableOpacity>,
    <TouchableOpacity
      style={styles.tabbarButton}
      onPress={() => props.navProps.navigation.replace("profile")}
      key="profile"
    >
      <Feather
        name="user"
        size={calculateWidth(width, 24)}
        color={props.navProps.route.name === "profile" ? "white" : "gray"}
      />
    </TouchableOpacity>,
  ];

  return (
    <View style={styles.layout}>
      {/* <Image
        source={require("@/assets/images/tabbar.png")}
        style={styles.tabbarBackground}
        contentFit="fill"
      /> */}
      <View style={styles.header}>
        <View style={styles.menuDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View style={styles.tabbarContainer}>
        {props.navProps.route.name === "index"
          ? tabs
          : props.navProps.route.name === "discover"
          ? [tabs[1], tabs[0], tabs[2]]
          : [tabs[0], tabs[2], tabs[1]]}
      </View>
    </View>
  );
}
