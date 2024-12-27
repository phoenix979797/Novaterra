import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
      button: {
        display: "flex",
        height: calculateWidth(width, 40),
        marginHorizontal: calculateWidth(width, 16),
        marginVertical: calculateWidth(width, 6),
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
        flexWrap: "wrap",
        borderRadius: 999,
        backgroundColor: "#732CB7",
      },
      buttonText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
    });
  }, [width, height]);

  return (
    <View>
      <ScrollView style={{ height: calculateHeight(height, 621) }}>
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Invest</Text>
      </TouchableOpacity>
    </View>
  );
}
