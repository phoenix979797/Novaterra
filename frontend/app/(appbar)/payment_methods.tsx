import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function PaymentMethods() {
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
      methodList: {
        display: "flex",
        padding: calculateWidth(width, 12),
        paddingHorizontal: calculateWidth(width, 16),
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 12),
        alignSelf: "stretch",
      },
      methodItem: {
        width: "100%",
        display: "flex",
        paddingHorizontal: calculateWidth(width, 8),
        paddingVertical: calculateWidth(width, 12),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.32)",
      },
      card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
      },
      cardImage: {
        width: calculateWidth(width, 64),
        height: calculateWidth(width, 42),
      },
      cardDetail: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      },
      cardTitle: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
      },
      cardTitleText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
      cardLabel: {
        color: "#FFF",
        display: "flex",
        paddingHorizontal: calculateWidth(width, 8),
        paddingVertical: calculateWidth(width, 2),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#732CB7",
      },
      cardNumber: {
        color: "rgba(255, 255, 255, 0.80)",
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
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
        Stay updated with the latest news, updates, and offers from Novaterra.
        Manage your subscription preferences easily.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.methodList}>
        <View style={styles.methodItem}>
          <View style={styles.card}>
            <Image
              source={require("@/assets/images/emoticons/mastercard.png")}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <View style={styles.cardDetail}>
              <View style={styles.cardTitle}>
                <Text style={styles.cardTitleText}>Name Surname</Text>
                <Text style={styles.cardLabel}>Primary</Text>
              </View>
              <Text style={styles.cardNumber}>**** 4567</Text>
            </View>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="white"
            />
          </View>
        </View>
        <View style={styles.methodItem}>
          <View style={styles.card}>
            <Image
              source={require("@/assets/images/emoticons/visa.png")}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <View style={styles.cardDetail}>
              <View style={styles.cardTitle}>
                <Text style={styles.cardTitleText}>Name Surname</Text>
              </View>
              <Text style={styles.cardNumber}>**** 4567</Text>
            </View>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="white"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/add_payment_method")}
          style={styles.formButton}
        >
          <MaterialIcons
            name="add"
            size={calculateWidth(width, 20)}
            color="white"
          />
          <Text style={styles.buttonLabel}>Add new payment method</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
