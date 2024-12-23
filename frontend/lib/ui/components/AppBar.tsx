import React, { useMemo } from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar, AppbarProps } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { calculateHeight, calculateWidth } from "../../utils";

interface MyAppBarProps extends AppbarProps {
  navProps: NativeStackHeaderProps;
}

export default function AppBar(props: MyAppBarProps) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      header: {
        backgroundColor: "transparent",
        display: "flex",
        padding: calculateWidth(width, 12),
        alignItems: "center",
        gap: calculateWidth(width, 8),
      },
      content: {
        color: "#FFF",
        fontSize: calculateWidth(width, 20),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 30),
      },
    });
  }, [width, height]);

  return (
    <Appbar.Header {...props} style={styles.header}>
      {props.navProps.options.headerLeft
        ? props.navProps.options.headerLeft({
            canGoBack: props.navProps.navigation.canGoBack(),
          })
        : undefined}

      {props.navProps.back ? (
        <Appbar.BackAction
          onPress={props.navProps.navigation.goBack}
          color="white"
          size={calculateWidth(width, 24)}
        />
      ) : null}

      <Appbar.Content
        title={getHeaderTitle(
          props.navProps.options,
          props.navProps.route.name
        )}
        titleStyle={styles.content}
      />

      {props.navProps.options.headerRight
        ? props.navProps.options.headerRight({
            canGoBack: props.navProps.navigation.canGoBack(),
          })
        : undefined}
    </Appbar.Header>
  );
}
