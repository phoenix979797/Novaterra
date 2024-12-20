import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { calculateWidth, useResize } from "@/lib";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function Profile() {
  const { width, height } = useResize();
  const styles = useMemo(() => {
    return StyleSheet.create({
      profile: {
        marginBottom: 150,
      },
      profileHeader: {
        marginTop: calculateWidth(width, 95),
        paddingHorizontal: calculateWidth(width, 16),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: calculateWidth(width, 12),
      },
      profileAvatar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        position: "relative",
      },
      avatar: {
        width: calculateWidth(width, 50),
        height: calculateWidth(width, 55),
      },
      avatarEdit: {
        position: "absolute",
        right: calculateWidth(width, 137),
        top: calculateWidth(width, 31),
        display: "flex",
        width: calculateWidth(width, 24),
        height: calculateWidth(width, 24),
        padding: calculateWidth(width, 1.667),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 8.333),
        borderRadius: calculateWidth(width, 832.5),
        backgroundColor: "#454545",
        paddingHorizontal: calculateWidth(width, 3.33),
        paddingVertical: calculateWidth(width, 1.67),
      },
      profileName: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 2),
        alignSelf: "stretch",
      },
      profileNameText: {
        color: "#FFF",
        fontFamily: "Inter Tight",
        fontSize: calculateWidth(width, 18),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 28),
      },
      profileIdText: {
        color: "rgba(255, 255, 255, 0.50)",
        fontFamily: "Inter Tight",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      profileWallet: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 2),
        alignSelf: "stretch",
        lineHeight: calculateWidth(width, 20),
      },
      profileWalletText: {
        display: "flex",
        width: calculateWidth(width, 148),
        overflow: "hidden",
        color: "rgba(255, 255, 255, 0.50)",
        textAlign: "center",
        textOverflow: "ellipsis",
        fontFamily: "Inter Tight",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
      },
      paymentHistory: {
        backgroundColor: "blue",
      },
    });
  }, [width, height]);

  return (
    <ScrollView style={styles.profile}>
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}>
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.avatarEdit}>
            <AntDesign
              name="edit"
              size={calculateWidth(width, 16)}
              color="white"
            />
          </View>
        </View>
        <View style={styles.profileName}>
          <Text style={styles.profileNameText}>Jonathan Carter</Text>
          <Text style={styles.profileIdText}>@CryptoWarrior22</Text>
          <View style={styles.profileWallet}>
            <Text style={styles.profileWalletText}>
              0x9A34D8C756Ab2E56D2C9Df56789B1234CDEF1234
            </Text>
            <Feather
              name="copy"
              size={calculateWidth(width, 24)}
              color="gray"
            />
          </View>
        </View>
      </View>
      <View style={styles.paymentHistory}></View>
    </ScrollView>
  );
}
