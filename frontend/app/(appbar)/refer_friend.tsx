import React, { useMemo } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Switch,
  TextInput,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ReferFriend() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      description: {
        padding: calculateWidth(width, 16),
        paddingTop: calculateWidth(width, 4),
        color: "rgba(255, 255, 255, 0.80)",
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
        alignSelf: "stretch",
      },
      divider: {
        height: calculateWidth(width, 1),
        paddingHorizontal: calculateWidth(width, 16),
      },
      settingItem: {
        display: "flex",
        padding: calculateWidth(width, 12),
        paddingHorizontal: calculateWidth(width, 16),
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 12),
        alignSelf: "stretch",
      },
      settingTitle: {
        color: "rgba(255, 255, 255, 0.70)",
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      settingList: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 12),
        alignSelf: "stretch",
      },
      switch: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        alignSelf: "stretch",
        flexDirection: "row",
      },
      switchLabel: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
        display: "flex",
        flexDirection: "column",
      },
      switchSubLabel: {
        color: "rgba(255, 255, 255, 0.60)",
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      input: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 6),
        alignSelf: "stretch",
      },
      inputLabel: {
        alignSelf: "stretch",
        color: "#FFFFFF70",
        fontFamily: "Albert Sans",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 20,
      },
      inputField: {
        display: "flex",
        padding: calculateWidth(width, 12),
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 8,
        backgroundColor: "#00000052",
        height: calculateWidth(width, 44),
        fontFamily: "Albert Sans",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 20,
        color: "white",
      },
      formButton: {
        display: "flex",
        height: 40,
        width: "100%",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 6),
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        flexDirection: "row",
      },
      buttonLabel: {
        color: "white",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 24,
      },
    });
  }, [width, height]);

  return (
    <ScrollView>
      <Text style={styles.description}>
        Share your unique referral link and get rewarded when your friends join.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.settingItem}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Your unique code</Text>
          <TextInput style={styles.inputField} value="12345" secureTextEntry />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Your referral link</Text>
          <TextInput style={styles.inputField} value="Link tex" />
        </View>
      </View>
      <View style={styles.formButton}>
        <MaterialCommunityIcons
          name="share"
          size={calculateWidth(width, 20)}
          color="white"
        />
        <Text style={styles.buttonLabel}>Share Link</Text>
      </View>
    </ScrollView>
  );
}
