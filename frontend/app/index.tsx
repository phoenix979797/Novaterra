import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Background, Header, TabBar } from "@/lib/ui/components";

export default function Index() {
  return (
    <Background>
      <Header />

      <View style={styles.dashboard}>
        <View style={styles.balanceContainer}>
          <Text style={styles.fireIcon}>🔥</Text>
          <Text style={styles.balanceLabel}>Your Balance</Text>
          <Text style={styles.balanceAmount}>82.394,12</Text>
          <Text style={styles.balanceUSD}>
            $<Text style={styles.balanceUSDAmount}>129.343,24 USD</Text>
          </Text>
          <Image
            source={require("@/assets/svgs/dashboard-linear.svg")}
            style={styles.balanceGradient}
          />
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.marketCard}>
            <Image
              source={require("@/assets/svgs/dashboard-market-card.svg")}
              style={styles.dashboardCard}
            />
            asd
          </View>
          <View style={styles.promotionCard}>
            <Image
              source={require("@/assets/svgs/dashboard-promotion-card.svg")}
              style={styles.dashboardCard}
            />
            asd
          </View>
        </View>
      </View>

      <TabBar route="dashboard" />
    </Background>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    // textAlign: "center",
  },
  balanceContainer: {
    alignItems: "center",
    marginTop: 57,
    paddingHorizontal: 16,
    height: 203,
    justifyContent: "space-evenly",
  },
  fireIcon: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 65.7508,
    lineHeight: 83,
    textAlign: "center",
    color: "#FFFFFF",
  },
  balanceLabel: {
    height: 24,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
  },
  balanceAmount: {
    color: "white",
    fontSize: 48,
    lineHeight: 60,
    fontWeight: "bold",
  },
  balanceUSD: {
    fontFamily: "Inter Tight",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5)",
  },
  balanceUSDAmount: {
    color: "#4CAF50",
  },
  balanceGradient: {
    position: "absolute",
    bottom: -80,
    left: 0,
    right: 0,
  },
  cardsContainer: {
    marginTop: 80,
    display: "flex",
    flexDirection: "row",
  },
  marketCard: {
    width: "50%",
    textAlign: "center",
    position: "relative",
    marginLeft: 23,
    marginRight: 18,
  },
  promotionCard: {
    width: "50%",
    textAlign: "center",
    position: "relative",
    marginLeft: 18,
    marginRight: 23,
  },
  dashboardCard: {
    position: "absolute",
    left: 0,
    width: "100%",
  },
});
