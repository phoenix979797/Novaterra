import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";
import { Feather } from "@expo/vector-icons";

export default function AddPaymentMethod() {
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
      input: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 6),
        alignSelf: "stretch",
      },
      inputGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
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
      button: {
        display: "flex",
        padding: 10,
        alignItems: "center",
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
        Add a new bank account or crypto wallet for seamless transactions.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.settingItem}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Bank or Crypto Wallet Name</Text>
          <TextInput style={styles.inputField} value="Select your bank name" />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Account Number</Text>
          <TextInput
            style={styles.inputField}
            value="Enter your account number"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Account Holder Name</Text>
          <TextInput
            style={styles.inputField}
            value="Enter your account holder name"
          />
        </View>
        <View style={styles.inputGroup}>
          <View style={{ ...styles.input, width: calculateWidth(width, 160) }}>
            <Text style={styles.inputLabel}>Expiry Date</Text>
            <TextInput style={styles.inputField} value="MM/YYYY" />
          </View>
          <View style={{ ...styles.input, width: calculateWidth(width, 160) }}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput style={styles.inputField} value="Enter CVV" />
          </View>
        </View>
        <View style={styles.formButton}>
          <Feather
            name="check"
            size={calculateWidth(width, 20)}
            color="white"
          />
          <Text style={styles.buttonLabel}>Save changes</Text>
        </View>
      </View>
    </ScrollView>
  );
}
