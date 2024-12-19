import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Background, Header, TabBar } from "@/lib/ui/components";
import { ImageBackground } from "expo-image";
import { calculateWidth, useResize } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const { width, height } = useResize();
  const styles = useMemo(() => {
    return StyleSheet.create({
      dashboard: {
        marginBottom: 150,
      },
      balanceContainer: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: calculateWidth(width, 4),
        marginTop: calculateWidth(width, 57),
        paddingHorizontal: calculateWidth(width, 16),
        marginBottom: calculateWidth(width, 70),
      },
      fireIcon: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: calculateWidth(width, 65.7508),
        lineHeight: calculateWidth(width, 83),
      },
      balanceLabel: {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
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
        width: calculateWidth(width, 404.582),
        height: calculateWidth(width, 112.302),
        flexShrink: 0,
        position: "absolute",
        bottom: calculateWidth(width, -70),
        left: "50%",
        transform: "translate(-50%, 0%)",
      },
      cardsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      marketCard: {
        width: calculateWidth(width, 146),
        height: calculateWidth(width, 277),
        flexShrink: 0,
        marginLeft: calculateWidth(width, 23),
        alignItems: "center",
      },
      promotionCard: {
        width: calculateWidth(width, 146),
        height: calculateWidth(width, 277),
        flexShrink: 0,
        marginRight: calculateWidth(width, 23),
        alignItems: "center",
      },
      cardIcon: {
        width: calculateWidth(width, 40),
        height: calculateWidth(width, 40),
        position: "absolute",
        top: calculateWidth(width, 28),
      },
      cardTitle: {
        color: "white",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 18),
        textAlign: "center",
        marginTop: calculateWidth(width, 55),
        paddingHorizontal: calculateWidth(width, 20),
      },
      cardDescription: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 15),
        textAlign: "center",
        marginTop: calculateWidth(width, 10),
        paddingHorizontal: calculateWidth(width, 7),
      },
      cardButton: {
        width: calculateWidth(width, 122),
        height: calculateWidth(width, 40),
        paddingHorizontal: calculateWidth(width, 6),
        paddingVertical: calculateWidth(width, 16),
        justifyContent: "center",
        gap: calculateWidth(width, 10),
        flexShrink: 0,
        flexWrap: "wrap",
        borderRadius: calculateWidth(width, 999),
        marginTop: calculateWidth(width, 18),
      },
      cardButtonText: {
        color: "#FFF",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 20),
        textAlign: "center",
      },
    });
  }, [width, height]);

  return (
    <Background>
      <Header />

      <ScrollView style={styles.dashboard}>
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
            resizeMode="stretch"
          />
        </View>
        <View style={styles.cardsContainer}>
          <ImageBackground
            source={require("@/assets/svgs/dashboard-market-card.svg")}
            style={styles.marketCard}
            contentFit="contain"
          >
            <Image
              source={require("@/assets/svgs/market.svg")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Explore the Secondary Market</Text>
            <Text style={styles.cardDescription}>
              Stay ahead by exploring real-time token prices and making informed
              trades effortlessly
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <LinearGradient
                colors={[
                  "#3FB541",
                  "rgba(63, 181, 65, 0.27)",
                  "rgba(63, 181, 65, 0.05)",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.cardButton}
              >
                <Text style={styles.cardButtonText}>Access Market</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/svgs/dashboard-promotion-card.svg")}
            style={styles.promotionCard}
            contentFit="contain"
          >
            <Image
              source={require("@/assets/svgs/promotion.svg")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Your Upcoming Promotions</Text>
            <Text style={styles.cardDescription}>
              Don’t miss out on exclusive offers, check out what’s next and
              start earning rewards
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <LinearGradient
                colors={[
                  "#F5B300",
                  "rgba(245, 179, 0, 0.33)",
                  "rgba(245, 179, 0, 0.05)",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.cardButton}
              >
                <Text style={styles.cardButtonText}>View Promotion</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>

      <TabBar route="dashboard" />
    </Background>
  );
}
