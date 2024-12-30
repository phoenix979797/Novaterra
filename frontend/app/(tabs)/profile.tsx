import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { calculateWidth, Linear } from "@/lib";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Profile() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      profile: {
        marginBottom: 110,
      },
      header: {
        marginTop: calculateWidth(width, 34),
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
      },
      headerText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 20),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 30),
      },
      generalData: {
        marginTop: calculateWidth(width, 16),
        marginHorizontal: calculateWidth(width, 81.5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: calculateWidth(width, 12),
        textAlign: "center",
      },
      profileAvatar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        position: "relative",
        margin: "auto",
      },
      avatar: {
        width: calculateWidth(width, 79),
        height: calculateWidth(width, 88),
      },
      avatarEdit: {
        position: "absolute",
        left: calculateWidth(width, 54),
        top: calculateWidth(width, 64),
        display: "flex",
        width: calculateWidth(width, 24),
        height: calculateWidth(width, 24),
        padding: calculateWidth(width, 1.667),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 8.333),
        borderRadius: calculateWidth(width, 832.5),
        backgroundColor: "#732CB7",
        paddingHorizontal: calculateWidth(width, 2.22),
        paddingVertical: calculateWidth(width, 1.11),
      },
      profileName: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: calculateWidth(width, 4),
      },
      fullnameText: {
        alignSelf: "stretch",
        color: "#FFF",
        textAlign: "center",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
      emailText: {
        color: "#989898",
        textAlign: "center",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      balanceGradient: {
        width: calculateWidth(width, 404),
        height: calculateWidth(width, 96),
        flexShrink: 0,
        position: "absolute",
        bottom: calculateWidth(width, -60),
      },
      settings: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
        flexWrap: "wrap",
        paddingHorizontal: calculateWidth(width, 16),
        marginTop: calculateWidth(width, 76),
        flexDirection: "row",
      },
      settingTab: {
        display: "flex",
        width: calculateWidth(width, 166),
        padding: calculateWidth(width, 8),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        alignSelf: "stretch",
        gap: calculateWidth(width, 8),
        borderRadius: calculateWidth(width, 12),
        backgroundColor: "rgba(0, 0, 0, 0.32)",
      },
      settingTabIcon: {
        width: calculateWidth(width, 32),
        height: calculateWidth(width, 32),
      },
      settingTabText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
    });
  }, [width, height]);

  return (
    <ScrollView style={styles.profile}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      <View style={styles.generalData}>
        <View style={styles.profileAvatar}>
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
            resizeMode="stretch"
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
          <Text style={styles.fullnameText}>Alexander Holmes</Text>
          <Text style={styles.emailText}>usersmailaddress@gmail.com</Text>
        </View>
        <View style={styles.balanceGradient}>
          <Linear />
        </View>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity onPress={() => router.push("/(appbar)/profile_data")}>
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/cabinet.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Personal Data</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/privacy_settings")}
        >
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/locked.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Privacy Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(appbar)/refer_friend")}>
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/persons.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Refer a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/my_investment")}
        >
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/money-bag.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>My Investment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/transaction_history")}
        >
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/page.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Transaction History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/payment_methods")}
        >
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/credit-card.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Payment Methods</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(appbar)/newsletter_subscription")}
        >
          <View style={styles.settingTab}>
            <Image
              source={require("@/assets/images/emoticons/envelope.png")}
              style={styles.settingTabIcon}
              resizeMode="contain"
            />
            <Text style={styles.settingTabText}>Newsletter Subscription</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
