import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { calculateWidth, useResize } from "@/lib";

const TabBar = (props: any) => {
  const { width, height } = useResize();
  const styles = useMemo(() => {
    return StyleSheet.create({
      tabbarContainer: {
        position: "absolute",
        bottom: calculateWidth(width, 26),
        left: calculateWidth(width, 16),
        right: calculateWidth(width, 16),
        justifyContent: "space-between",
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
    });
  }, [width, height]);

  return (
    <div style={styles.tabbarContainer}>
      <TouchableOpacity style={styles.tabbarButton}>
        <Feather
          name="globe"
          size={calculateWidth(width, 24)}
          color={props.route === "discover" ? "white" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabbarHomeButton}>
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
      <TouchableOpacity style={styles.tabbarButton}>
        <Feather
          name="user"
          size={calculateWidth(width, 24)}
          color={props.route === "profile" ? "white" : "gray"}
        />
      </TouchableOpacity>
    </div>
  );
};

export default TabBar;
