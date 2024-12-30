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
import { calculateWidth } from "../../utils";

export default function Operator(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 12),
        marginBottom: calculateWidth(width, 24),
        paddingHorizontal: calculateWidth(width, 16),
      },
      title: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
      image: {
        height: calculateWidth(width, 138),
        width: "100%",
        borderRadius: calculateWidth(width, 16),
      },
      description: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      table: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 4),
        alignSelf: "stretch",
      },
      row: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 8),
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: calculateWidth(width, 12),
        backgroundColor: "rgba(81, 81, 81, 0.20)",
      },
      items: {
        display: "flex",
        width: calculateWidth(width, 124),
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 10),
        alignItems: "center",
        gap: calculateWidth(width, 10),
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      location: {
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 10),
        flex: 1,
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      units: {
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        width: calculateWidth(width, 68),
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
      },
      margin: {
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        width: calculateWidth(width, 49),
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
      },
      revenue: {
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        width: calculateWidth(width, 100),
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
      },
      button: {
        display: "flex",
        width: calculateWidth(width, 343),
        height: calculateWidth(width, 40),
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 6),
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
        flexWrap: "wrap",
        borderRadius: 999,
        backgroundColor: "#732CB7",
        marginTop: calculateWidth(width, 33),
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
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.title}>Presentation of the Operators</Text>
        <Image
          style={styles.image}
          source={require("@/assets/images/operator.png")}
        />
        <Text style={styles.description}>
          {`The QUATTRO Group is an independent family business founded in 1972, specializing in the construction sector. With over 40 years of experience, the group has evolved over generations and diversified, while remaining true to its values and expertise in the building trades.

Henri, the founding father, runs the company alongside his three children:
            
 • Vincent, managing director, who joined the group in 2008 after a career as a works director and now oversees operations;
            
 • Bruno, responsible for technical and commercial support;
            
 • Lydie, in charge of administration and accounting support.

 Together, they form a dynamic team dedicated to providing quality services while preserving the heritage and excellence of their achievements.`}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Projects Completed by the Operators</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.location} numberOfLines={1}>
              Location
            </Text>
            <Text style={styles.units} numberOfLines={1}>
              No. of Units
            </Text>
            <Text style={styles.margin} numberOfLines={1}>
              Margin
            </Text>
            <Text style={styles.revenue} numberOfLines={1}>
              Revenue Incl. Tax
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.location} numberOfLines={1}>
              Sanary-sur-Mersefsefesf
            </Text>
            <Text style={styles.units} numberOfLines={1}>
              3 villas
            </Text>
            <Text style={styles.margin} numberOfLines={1}>
              754 k€
            </Text>
            <Text style={styles.revenue} numberOfLines={1}>
              3,026 k€
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Invest</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
