import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { calculateHeight, calculateWidth } from "../../utils";

export default function Comment(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      chat: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: calculateWidth(width, 12),
        flexShrink: 0,
        paddingHorizontal: calculateWidth(width, 16),
      },
      item: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 12),
        paddingVertical: calculateHeight(height, 9),
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 8),
        alignSelf: "stretch",
        borderRadius: calculateWidth(width, 12),
        borderColor: "rgba(255, 255, 255, 0.20)",
        borderWidth: 1,
        backgroundColor: "rgba(116, 116, 116, 0.20)",
      },
      profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: calculateWidth(width, 8),
        alignSelf: "stretch",
      },
      avatar: {
        width: calculateWidth(width, 50),
        height: calculateWidth(width, 55),
      },
      profileMain: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: calculateWidth(width, 4),
        alignSelf: "stretch",
      },
      name: {
        color: "#FFF",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      date: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      comment: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      input: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: calculateWidth(width, 16),
        alignItems: "center",
        gap: calculateWidth(width, 12),
        position: "absolute",
        bottom: calculateWidth(width, 24),
        justifyContent: "space-between",
      },
      inputContainer: {
        display: "flex",
        flex: 1,
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 2),
        alignItems: "center",
        flexDirection: "row",
        gap: calculateWidth(width, 4),
        borderRadius: calculateWidth(width, 999),
        backgroundColor: "rgba(255, 255, 255, 0.10)",
      },
      inputField: {
        color: "#FFF",
        flex: 1,
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      button: {
        display: "flex",
        width: calculateWidth(width, 48),
        height: calculateWidth(width, 48),
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        borderRadius: 999,
        backgroundColor: "#732CB7",
      },
    });
  }, [width, height]);

  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={{ marginBottom: calculateWidth(width, 90) }}>
        <View style={styles.chat}>
          <View style={styles.item}>
            <View style={styles.profile}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
                resizeMode="stretch"
              />
              <View style={styles.profileMain}>
                <Text style={styles.name}>You</Text>
                <Text style={styles.date}>
                  Yesterday, 12 Jan 2024, 09:00 AM
                </Text>
              </View>
            </View>
            <Text style={styles.comment}>
              Great question, Alex! Generally, in this kind of operation, if the
              loan is repaid earlier than expected, the interest calculation is
              indeed done pro rata temporis—meaning you'll earn interest only
              for the period during which your capital was actually invested.
              However, it depends on the specific terms of the contract for this
              operation.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.profile}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
                resizeMode="stretch"
              />
              <View style={styles.profileMain}>
                <Text style={styles.name}>You</Text>
                <Text style={styles.date}>
                  Yesterday, 12 Jan 2024, 09:00 AM
                </Text>
              </View>
            </View>
            <Text style={styles.comment}>
              Great question, Alex! Generally, in this kind of operation, if the
              loan is repaid earlier than expected, the interest calculation is
              indeed done pro rata temporis—meaning you'll earn interest only
              for the period during which your capital was actually invested.
              However, it depends on the specific terms of the contract for this
              operation.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.profile}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
                resizeMode="stretch"
              />
              <View style={styles.profileMain}>
                <Text style={styles.name}>You</Text>
                <Text style={styles.date}>
                  Yesterday, 12 Jan 2024, 09:00 AM
                </Text>
              </View>
            </View>
            <Text style={styles.comment}>
              Great question, Alex! Generally, in this kind of operation, if the
              loan is repaid earlier than expected, the interest calculation is
              indeed done pro rata temporis—meaning you'll earn interest only
              for the period during which your capital was actually invested.
              However, it depends on the specific terms of the contract for this
              operation.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.profile}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
                resizeMode="stretch"
              />
              <View style={styles.profileMain}>
                <Text style={styles.name}>You</Text>
                <Text style={styles.date}>
                  Yesterday, 12 Jan 2024, 09:00 AM
                </Text>
              </View>
            </View>
            <Text style={styles.comment}>
              Great question, Alex! Generally, in this kind of operation, if the
              loan is repaid earlier than expected, the interest calculation is
              indeed done pro rata temporis—meaning you'll earn interest only
              for the period during which your capital was actually invested.
              However, it depends on the specific terms of the contract for this
              operation.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.profile}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
                resizeMode="stretch"
              />
              <View style={styles.profileMain}>
                <Text style={styles.name}>You</Text>
                <Text style={styles.date}>
                  Yesterday, 12 Jan 2024, 09:00 AM
                </Text>
              </View>
            </View>
            <Text style={styles.comment}>
              Great question, Alex! Generally, in this kind of operation, if the
              loan is repaid earlier than expected, the interest calculation is
              indeed done pro rata temporis—meaning you'll earn interest only
              for the period during which your capital was actually invested.
              However, it depends on the specific terms of the contract for this
              operation.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.input}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputField} value="Alexander Holmes" />
          <MaterialIcons name="insert-emoticon" size={24} color="white" />
          <MaterialIcons name="attachment" size={24} color="white" />
        </View>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons
            name="send"
            size={calculateWidth(width, 24)}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
