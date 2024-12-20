import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { ImageBackground } from "expo-image";
import { calculateWidth } from "@/lib";

export default function Dashboard() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      dashboard: {
        paddingBottom: calculateWidth(width, 140),
      },
      balanceContainer: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 4),
        marginTop: calculateWidth(width, 79),
        paddingHorizontal: calculateWidth(width, 16),
        marginBottom: calculateWidth(width, 26.25),
      },
      fireIcon: {
        width: calculateWidth(width, 55),
        height: calculateWidth(width, 55),
        flexShrink: 0,
      },
      balanceLabel: {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      companyList: {
        display: "flex",
        padding: calculateWidth(width, 8),
        alignItems: "center",
        flexDirection: "row",
        gap: calculateWidth(width, 12),
      },
      companyItem: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 12),
        paddingVertical: calculateWidth(width, 6),
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 10),
        borderRadius: calculateWidth(width, 999),
        backgroundColor: "white",
      },
      companyItemText: {
        color: "#000",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 20),
      },
      balanceAmount: {
        color: "white",
        fontSize: calculateWidth(width, 48),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 60),
        letterSpacing: calculateWidth(width, -0.96),
      },
      balanceUSD: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      balanceUSDAmount: {
        color: "#8CD667",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      balanceGradient: {
        width: calculateWidth(width, 404),
        height: calculateWidth(width, 96),
        flexShrink: 0,
        position: "absolute",
        bottom: calculateWidth(width, -49),
        left: "50%",
        transform: "translate(-50%, 0%)",
      },
      cardsContainer: {
        width: "100%",
        textAlign: "center",
      },
      topContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      marketCard: {
        width: calculateWidth(width, 155),
        height: calculateWidth(width, 230),
        flexShrink: 0,
        marginLeft: calculateWidth(width, 16),
        alignItems: "center",
      },
      promotionCard: {
        width: calculateWidth(width, 155),
        height: calculateWidth(width, 230),
        flexShrink: 0,
        marginRight: calculateWidth(width, 16),
        alignItems: "center",
      },
      friendCard: {
        width: calculateWidth(width, 188),
        height: calculateWidth(width, 147),
        flexShrink: 0,
        alignItems: "center",
        margin: "auto",
        marginTop: calculateWidth(width, -30),
      },
      cardIcon: {
        width: calculateWidth(width, 54),
        height: calculateWidth(width, 54),
        marginTop: calculateWidth(width, 16.75),
        flexShrink: 0,
      },
      cardFriendIcon: {
        width: calculateWidth(width, 54),
        height: calculateWidth(width, 44),
        marginTop: calculateWidth(width, 10),
        flexShrink: 0,
      },
      cardTitle: {
        color: "white",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
        textAlign: "center",
        paddingHorizontal: calculateWidth(width, 11),
      },
      cardDescription: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
        marginTop: calculateWidth(width, 5.25),
        paddingHorizontal: calculateWidth(width, 11),
      },
      cardFriendDescription: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
        marginTop: calculateWidth(width, 5.25),
        paddingHorizontal: calculateWidth(width, 11),
      },
    });
  }, [width, height]);

  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.balanceContainer}>
        <Image
          source={require("@/assets/images/emoticons/fire.png")}
          style={styles.fireIcon}
          resizeMode="stretch"
        />
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <View style={styles.companyList}>
          <View style={styles.companyItem}>
            <Text style={styles.companyItemText}>1Uno</Text>
          </View>
          <View style={styles.companyItem}>
            <Text style={styles.companyItemText}>2Due</Text>
          </View>
          <View style={styles.companyItem}>
            <Text style={styles.companyItemText}>3Tre</Text>
          </View>
        </View>
        <Text style={styles.balanceAmount}>82.394,12</Text>
        <Text style={styles.balanceUSD}>
          $<Text style={styles.balanceUSDAmount}>129.343,24 USD</Text>
        </Text>
        <Image
          source={require("@/assets/svgs/dashboard-linear.svg")}
          style={styles.balanceGradient}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.topContainer}>
          <ImageBackground
            source={require("@/assets/svgs/dashboard-market-card.svg")}
            style={styles.marketCard}
            contentFit="contain"
          >
            <Image
              source={require("@/assets/svgs/market.svg")}
              style={styles.cardIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>Explore the Secondary Market</Text>
            <Text style={styles.cardDescription}>
              Stay ahead by exploring real-time token prices and making informed
              trades effortlessly
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/svgs/dashboard-promotion-card.svg")}
            style={styles.promotionCard}
            contentFit="contain"
          >
            <Image
              source={require("@/assets/svgs/promotion.svg")}
              style={styles.cardIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>Your Upcoming Promotions</Text>
            <Text style={styles.cardDescription}>
              Don't miss out on exclusive offers, check out what's next and
              start earning rewards
            </Text>
          </ImageBackground>
        </View>
        <ImageBackground
          source={require("@/assets/svgs/dashboard-friend-card.svg")}
          style={styles.friendCard}
          contentFit="contain"
        >
          <Image
            source={require("@/assets/svgs/friend.svg")}
            style={styles.cardFriendIcon}
            resizeMode="contain"
          />
          <Text style={styles.cardTitle}>Refer a Friend</Text>
          <Text style={styles.cardFriendDescription}>
            Boost your ROI by 1% for every friend you bring!
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
