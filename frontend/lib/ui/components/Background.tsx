import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Background = (props: any) => {
  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      backgroundColor: "black",
    },
    backgroundImage: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.backgroundContainer}
        edges={["left", "right"]}
      >
        <ImageBackground
          source={require("@/assets/images/background.png")}
          resizeMode="stretch"
          style={styles.backgroundImage}
        >
          {props.children}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Background;
