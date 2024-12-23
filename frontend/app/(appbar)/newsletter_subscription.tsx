import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Switch,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";

export default function NewsletterSubscription() {
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
        maxWidth: calculateWidth(width, 280),
      },
    });
  }, [width, height]);

  return (
    <ScrollView>
      <Text style={styles.description}>
        Stay updated with the latest news, updates, and offers from Novaterra.
        Manage your subscription preferences easily.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.settingItem}>
        <View style={styles.switch}>
          <Switch
            thumbColor="#ffffff"
            trackColor={{ false: "#000", true: "#732CB7" }}
            value={false}
          />
          <View>
            <Text style={styles.switchLabel}>
              Receive Novaterra newsletters
            </Text>
            <Text style={styles.switchSubLabel}>
              Get news, tips, and exclusive offers straight to your inbox
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
