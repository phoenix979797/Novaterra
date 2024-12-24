import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { calculateWidth, DiscoverCard } from "@/lib";
import DiscoverCardImage from "@/lib/ui/svgs/DiscoverCardImage";

export default function Discover() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      discover: {
        marginBottom: 110,
      },
      filter: {
        marginTop: calculateWidth(width, 100),
        display: "flex",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
        alignItems: "center",
        gap: calculateWidth(width, 12),
        alignSelf: "stretch",
        flexDirection: "row",
      },
      filterItem: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 12),
        paddingVertical: calculateWidth(width, 6),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        borderRadius: calculateWidth(width, 999),
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      discoverCard: {
        marginHorizontal: calculateWidth(width, 16.5),
        marginTop: calculateWidth(width, 10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      discoverImage: {
        // width: 310,
        // height: 173,
        marginHorizontal: calculateWidth(width, 16),
        flexShrink: 0,
        marginTop: calculateWidth(width, 24),
      },
      title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 2),
        marginTop: calculateWidth(width, 12),
      },
      titleText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 20),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 30),
      },
      subTitle: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: calculateWidth(width, 8),
      },
      symbol: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: calculateWidth(width, 4),
      },
      symbolImage: {
        width: calculateWidth(width, 22),
        height: calculateWidth(width, 22),
      },
      symbolText: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      dot: {
        width: calculateWidth(width, 4),
        height: calculateWidth(width, 4),
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        borderRadius: calculateWidth(width, 4),
        flexShrink: 0,
      },
      location: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: calculateWidth(width, 18),
        marginTop: calculateWidth(width, 11),
        marginHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 8),
        borderTopColor: "rgba(255, 255, 255, 0.10)",
        borderTopWidth: 1,
      },
      infoCard: {
        width: calculateWidth(width, 146),
        height: calculateWidth(width, 50),
        alignItems: "center",
      },
      infoTitle: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      infoValue: {
        color: "#FFF",
        fontSize: calculateWidth(width, 24),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 32),
      },
      infoSubValue: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      amount: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 4),
        paddingHorizontal: calculateWidth(width, 16),
        width: "100%",
      },
      progressBar: {
        backgroundColor: "rgba(148, 148, 148, 0.20)",
        position: "absolute",
        bottom: 0,
      },
      amountValue: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
      amountSubValue: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
    });
  }, [width, height]);

  const filter = [
    {
      value: 1,
      label: "1Uno",
    },
    {
      value: 2,
      label: "2Due",
    },
    {
      value: 3,
      label: "3Tre",
    },
    {
      value: 4,
      label: "Quattro",
    },
    {
      value: 5,
      label: "5Cinque",
    },
  ];

  return (
    <ScrollView style={styles.discover}>
      <View style={styles.filter}>
        {filter.map((item) => (
          <Text
            key={item.value}
            style={{
              ...styles.filterItem,
              backgroundColor:
                item.value === 0 ? "#FFF" : "rgba(255, 255, 255, 0.10)",
              color: item.value === 0 ? "#000" : "#FFF",
            }}
          >
            {item.label}
          </Text>
        ))}
      </View>
      <View style={styles.discoverCard}>
        <DiscoverCard style={{ position: "absolute", zIndex: -1 }} />
        <DiscoverCardImage
          style={styles.discoverImage}
          href={require("@/assets/images/company.png")}
        />
        <View style={styles.title}>
          <Text style={styles.titleText}>Eco-Friendly Lakefront Home</Text>
          <View style={styles.subTitle}>
            <View style={styles.symbol}>
              <Image
                style={styles.symbolImage}
                source={require("@/assets/images/emoticons/nt1.png")}
              />
              <Text style={styles.symbolText}>1Uno</Text>
            </View>
            <View style={styles.dot} />
            <Text style={styles.location}>Zurich, Switzerland</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>CHF 20K</Text>
            <Text style={styles.infoTitle}>Minimum Order</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>Q3 2025</Text>
            <Text style={styles.infoTitle}>Planning Timeline</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>
              20
              <Text style={styles.infoSubValue}>/100</Text>
            </Text>
            <Text style={styles.infoTitle}>Available Slot</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>16%</Text>
            <Text style={styles.infoTitle}>ROL</Text>
          </View>
        </View>
        <View style={styles.amount}>
          <ProgressBar
            progress={0.9}
            color="white"
            style={styles.progressBar}
          />
          <Text style={styles.amountValue}>
            $1,470,000
            <Text style={styles.amountSubValue}>/$1,580,000</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
