import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { calculateHeight, calculateWidth } from "@/lib";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TabLayout(props: any) {
  const navigation = useNavigation();
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
        bottom: calculateWidth(width, 26),
        left: calculateWidth(width, 16),
        right: calculateWidth(width, 16),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
      },
      tabbarHomeButton: {
        width: calculateWidth(width, 60),
        height: calculateWidth(width, 60),
        flexShrink: 0,
      },
      tabbarHomeIcon: {
        width: calculateWidth(width, 39),
        height: calculateWidth(width, 39),
        position: "absolute",
        flexShrink: 0,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      tabbarHomeButtonPolygon: {
        width: calculateWidth(width, 52),
        height: calculateWidth(width, 58),
        flexShrink: 0,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      tabbarButton: {
        display: "flex",
        width: calculateWidth(width, 55),
        height: calculateWidth(width, 55),
        padding: calculateWidth(width, 3),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
      },
      tabbarBackground: {
        width: calculateWidth(width, 375),
        height: calculateHeight(height, 219),
        flex: 1,
        position: "absolute",
        bottom: 0,
      },
    });
  }, [width, height]);

  return (
    <View style={styles.layout}>
      <Image
        source={require("@/assets/images/tabbar.png")}
        style={styles.tabbarBackground}
        contentFit="fill"
      />
      <View style={styles.header}>
        <View style={styles.menuDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <Image
          source={require("@/assets/svgs/logo.svg")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      <View style={styles.tabbarContainer}>
        <TouchableOpacity
          style={styles.tabbarButton}
          onPress={() => navigation.navigate("(tabs)", { screen: "discover" })}
        >
          <Feather
            name="globe"
            size={calculateWidth(width, 24)}
            color={props.route === "discover" ? "white" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabbarHomeButton}
          onPress={() => navigation.navigate("(tabs)", { screen: "index" })}
        >
          {props.route === "dashboard" ? (
            <Image
              source={require("@/assets/svgs/tabbar-home-opened.svg")}
              style={styles.tabbarHomeButtonPolygon}
            />
          ) : (
            <Image
              source={require("@/assets/svgs/tabbar-home-closed.svg")}
              style={styles.tabbarHomeButtonPolygon}
            />
          )}
          <Image
            source={require("@/assets/images/home.png")}
            style={styles.tabbarHomeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabbarButton}
          onPress={() => navigation.navigate("(tabs)", { screen: "profile" })}
        >
          <Feather
            name="user"
            size={calculateWidth(width, 24)}
            color={props.route === "profile" ? "white" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
