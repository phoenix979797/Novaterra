import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";

export default function TransactionHistory() {
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
    });
  }, [width, height]);

  return (
    <ScrollView>
      <Text style={styles.description}>
        Track all your past transactions in one place. Easily review your
        deposits, withdrawals, investments, and other activities.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
    </ScrollView>
  );
}
