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

export default function PrivacySettings() {
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
    });
  }, [width, height]);

  return (
    <ScrollView>
      <Text style={styles.description}>
        Manage your account's security, notifications to tailor your experience
        and protect your privacy
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Security Setting</Text>
        <View style={styles.settingList}>
          <View style={styles.switch}>
            <Switch
              thumbColor="#ffffff"
              trackColor={{ false: "#000", true: "#732CB7" }}
              value={true}
            />
            <Text style={styles.switchLabel}>
              Notify me about suspicious logins
            </Text>
          </View>
          <View style={styles.switch}>
            <Switch
              thumbColor="#ffffff"
              trackColor={{ false: "#000", true: "#732CB7" }}
              value={false}
            />
            <Text style={styles.switchLabel}>
              Two-Factor Authentication (2FA)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Notification preferences</Text>
        <View style={styles.settingList}>
          <View style={styles.switch}>
            <Switch
              thumbColor="#ffffff"
              trackColor={{ false: "#000", true: "#732CB7" }}
              value={true}
            />
            <View>
              <Text style={styles.switchLabel}>Allow push notifications</Text>
              <Text style={styles.switchSubLabel}>
                Allow push notifications
              </Text>
            </View>
          </View>
          <View style={styles.switch}>
            <Switch
              thumbColor="#ffffff"
              trackColor={{ false: "#000", true: "#732CB7" }}
              value={false}
            />
            <View>
              <Text style={styles.switchLabel}>SMS Alerts</Text>
              <Text style={styles.switchSubLabel}>
                Receive alerts via SMS for important updates
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Password</Text>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>EmailAddress</Text>
          <TextInput
            style={styles.inputField}
            value="usersmailaddress@gmail.com"
            secureTextEntry
          />
        </View>
      </View>
    </ScrollView>
  );
}
