import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { calculateHeight, calculateWidth, useResize } from "@/lib";

const Header = (props: any) => {
  const { width, height } = useResize();
  const styles = useMemo(() => {
    return StyleSheet.create({
      header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: calculateWidth(width, 46),
        top: calculateWidth(width, 25.5),
        paddingHorizontal: calculateWidth(width, 20),
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
    });
  }, [width, height]);

  return (
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
  );
};

export default Header;
