import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { backgroundStyles } from "@/lib/ui/styles";

const Background = (props: any) => (
  <SafeAreaProvider>
    <SafeAreaView
      style={backgroundStyles.backgroundContainer}
      edges={["left", "right"]}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="stretch"
        style={backgroundStyles.backgroundImage}
      >
        {props.children}
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default Background;
