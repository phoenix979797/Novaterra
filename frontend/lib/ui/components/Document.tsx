import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { calculateWidth, calculateHeight } from "../../utils";
import { PDFIcon } from "../svgs";
import Feather from "@expo/vector-icons/Feather";

export default function Document(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 16),
      },
      item: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: calculateWidth(width, 8),
        paddingVertical: calculateWidth(width, 4),
        alignItems: "center",
        gap: calculateWidth(width, 8),
        alignSelf: "stretch",
      },
      main: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 2),
        paddingVertical: calculateWidth(width, 8),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: calculateWidth(width, 4),
        flex: 1,
      },
      title: {
        color: "#FFF",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 20),
      },
      date: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
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
        <View style={styles.list}>
          <View style={styles.item}>
            <PDFIcon
              width={calculateWidth(width, 40)}
              height={calculateWidth(width, 40)}
            />
            <View style={styles.main}>
              <Text style={styles.title} numberOfLines={1}>
                Plaquette Annuelle 2023 - Euro Concept Promotion
              </Text>
              <Text style={styles.date} numberOfLines={1}>
                November 29, 2024
              </Text>
            </View>
            <Feather name="download" size={24} color="white" />
          </View>
          <View style={styles.item}>
            <PDFIcon
              width={calculateWidth(width, 40)}
              height={calculateWidth(width, 40)}
            />
            <View style={styles.main}>
              <Text style={styles.title} numberOfLines={1}>
                KBIS Euro Concept Promotion
              </Text>
              <Text style={styles.date} numberOfLines={1}>
                November 29, 2024
              </Text>
            </View>
            <Feather name="download" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Invest</Text>
      </TouchableOpacity>
    </View>
  );
}
