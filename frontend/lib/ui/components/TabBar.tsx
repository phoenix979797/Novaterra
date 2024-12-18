import React from "react";
import { Image } from "expo-image";
import { tabBarStyles } from "@/lib/ui/styles";
import { Feather } from "@expo/vector-icons";

const TabBar = (props: any) => (
  <div style={tabBarStyles.tabbarContainer}>
    <Feather
      name="globe"
      size={24}
      color={props.route === "discover" ? "white" : "gray"}
    />
    <div style={tabBarStyles.tabbarHome}>
      {props.route === "dashboard" ? (
        <Image
          source={require("@/assets/svgs/tabbar-home-opened.svg")}
          style={tabBarStyles.tabbarHomeIcon}
        />
      ) : (
        <Image
          source={require("@/assets/svgs/tabbar-home-closed.svg")}
          style={tabBarStyles.tabbarHomeIcon}
        />
      )}
      <Image
        source={require("@/assets/images/home.png")}
        style={tabBarStyles.tabbarHomeIcon}
      />
    </div>
    <Feather
      name="user"
      size={24}
      color={props.route === "profile" ? "white" : "gray"}
    />
  </div>
);

export default TabBar;
