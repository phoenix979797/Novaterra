import React, { useMemo } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { calculateWidth } from "@/lib";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileData() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      profileData: {
        marginBottom: 150,
      },
      profileAvatar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
      },
      avatar: {
        width: calculateWidth(width, 79),
        height: calculateWidth(width, 88),
      },
      avatarEdit: {
        position: "absolute",
        bottom: calculateWidth(width, 0),
        display: "flex",
        width: calculateWidth(width, 24),
        height: calculateWidth(width, 24),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 8.333),
        borderRadius: calculateWidth(width, 832.5),
        backgroundColor: "#454545",
        paddingHorizontal: calculateWidth(width, 2.22),
        paddingVertical: calculateWidth(width, 1.11),
      },
      profileForm: {
        display: "flex",
        marginTop: calculateWidth(width, 16),
        paddingHorizontal: calculateWidth(width, 16),
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 12,
      },
      formItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 6,
        alignSelf: "stretch",
      },
      itemLabel: {
        alignSelf: "stretch",
        color: "#FFFFFF70",
        fontFamily: "Albert Sans",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 20,
      },
      itemInput: {
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
    <ScrollView style={styles.profileData}>
      <View style={styles.profileAvatar}>
        <Image
          source={require("@/assets/images/avatar.png")}
          style={styles.avatar}
          resizeMode="stretch"
        />
        <View style={styles.avatarEdit}>
          <AntDesign
            name="edit"
            size={calculateWidth(width, 13)}
            color="white"
          />
        </View>
      </View>
      <View style={styles.profileForm}>
        <View style={styles.formItem}>
          <Text style={styles.itemLabel}>Name</Text>
          <TextInput style={styles.itemInput} value="Alexander Holmes" />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.itemLabel}>EmailAddress</Text>
          <TextInput
            style={styles.itemInput}
            value="usersmailaddress@gmail.com"
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.itemLabel}>PhoneNumber</Text>
          <TextInput style={styles.itemInput} value="(00380) 4619983" />
        </View>
        <View style={styles.formButton}>
          <AntDesign
            name="edit"
            size={calculateWidth(width, 20)}
            color="white"
          />
          <Text style={styles.buttonLabel}>Edit personal data</Text>
        </View>
      </View>
    </ScrollView>
  );
}
