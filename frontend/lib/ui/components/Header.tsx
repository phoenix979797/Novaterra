import React from "react";
import { Image } from "expo-image";
import { headerStyles } from "@/lib/ui/styles";
import { View } from "react-native";

const Header = (props: any) => (
  <View style={headerStyles.header}>
    <View style={headerStyles.menuDots}>
      <View style={headerStyles.dot} />
      <View style={headerStyles.dot} />
      <View style={headerStyles.dot} />
      <View style={headerStyles.dot} />
    </View>
    <Image
      source={require("@/assets/images/logo.png")}
      style={headerStyles.logo}
      contentFit="contain"
    />
  </View>
);

export default Header;
