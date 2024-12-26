import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import {
  calculateWidth,
  Divider,
  InvestmentCard,
  InvestmentLinear,
} from "@/lib";

export default function MyInvestment() {
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
      investmentCount: {
        padding: calculateWidth(width, 16),
        paddingBottom: calculateWidth(width, 12),
        color: "#FFF",
        fontFamily: "Inter Tight",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 20),
      },
      investmentList: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 24),
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: 16,
        flexWrap: "wrap",
        flexDirection: "row",
      },
      investmentCard: {
        width: calculateWidth(width, 155),
        height: calculateWidth(width, 271.5),
      },
      title: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: calculateWidth(width, 4),
        paddingTop: calculateWidth(width, 22),
      },
      icon: {
        width: calculateWidth(width, 37),
        height: calculateWidth(width, 37),
      },
      titleMain: {
        display: "flex",
        alignItems: "center",
        gap: calculateWidth(width, 4),
        flexDirection: "row",
      },
      titleText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
      },
      lockIcon: {
        display: "flex",
        width: calculateWidth(width, 20),
        height: calculateWidth(width, 20),
        justifyContent: "center",
        alignItems: "center",
      },
      titleGradient: {
        width: calculateWidth(width, 153),
        height: calculateWidth(width, 33),
        flexShrink: 0,
        position: "absolute",
        bottom: calculateWidth(width, -27),
      },
      info: {
        display: "flex",
        paddingHorizontal: 12,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8,
        paddingTop: calculateWidth(width, 35),
      },
      infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
      },
      value: {
        color: "#FFF",
        fontSize: calculateWidth(width, 20),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 30),
      },
      label: {
        color: "rgba(255, 255, 255, 0.70)",
        fontFamily: "Albert Sans",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
    });
  }, [width, height]);

  const invests = [
    {
      title: "NT1Uno",
      icon: require("@/assets/images/emoticons/nt1.png"),
      locked: true,
      price: 50.12924,
      rol: 16,
    },
    {
      title: "NT2Due",
      icon: require("@/assets/images/emoticons/nt2.png"),
      locked: false,
      price: 50.12924,
      rol: 16,
    },
    {
      title: "NT3Tre",
      icon: require("@/assets/images/emoticons/nt3.png"),
      locked: false,
      price: 50.12924,
      rol: 16,
    },
    {
      title: "NT4Quattro",
      icon: require("@/assets/images/emoticons/nt4.png"),
      locked: true,
      price: 50.12924,
      rol: 16,
    },
  ];

  return (
    <ScrollView>
      <Text style={styles.description}>
        View and manage your ongoing investments and track your returns easily.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <Text style={styles.investmentCount}>
        Currently, you have 4 on going investment
      </Text>
      <View style={styles.investmentList}>
        {invests.map((item, index) => (
          <View key={item.title} style={styles.investmentCard}>
            <InvestmentCard
              style={{ position: "absolute" }}
              color={index % 4 === 0 || index % 4 === 3 ? "#3FB541" : "#F5B300"}
            />
            <View style={styles.title}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.titleMain}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Image
                  source={
                    item.locked
                      ? require("@/assets/images/emoticons/locked.png")
                      : require("@/assets/images/emoticons/unlocked.png")
                  }
                  style={styles.lockIcon}
                />
              </View>
              <View style={styles.titleGradient}>
                <InvestmentLinear />
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.infoContainer}>
                <Text style={styles.value}>{item.price}</Text>
                <Text style={styles.label}>Current Price (CHF)</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.value}>{item.rol}%</Text>
                <Text style={styles.label}>ROL</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
