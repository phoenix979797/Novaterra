import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { General, Presentation, FinancialStatement } from "@/lib";

export default function PromotionDetail() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          color: "#fff",
        },
        tabBarItemStyle: {
          width: "auto",
          alignItems: "flex-start",
        },
        tabBarStyle: {
          backgroundColor: "transparent",
          marginHorizontal: 16,
          marginBottom: 20,
          borderBottomColor: "rgba(255, 255, 255, 0.20)",
          borderBottomWidth: 1,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 1,
        },
      }}
    >
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Presentation" component={Presentation} />
      <Tab.Screen name="Financial Statement" component={FinancialStatement} />
      <Tab.Screen name="Operator" component={General} />
      <Tab.Screen name="Document" component={General} />
      <Tab.Screen name="Commet" component={General} />
    </Tab.Navigator>
  );
}
