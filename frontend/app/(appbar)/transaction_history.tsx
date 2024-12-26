import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import { calculateWidth, Divider } from "@/lib";

export default function TransactionHistory() {
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
      filter: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
        alignItems: "center",
        gap: calculateWidth(width, 8),
        alignSelf: "stretch",
        flexDirection: "row",
        width: calculateWidth(width, 375),
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
      transactionList: {
        display: "flex",
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
      },
      transactionItem: {
        display: "flex",
        paddingVertical: calculateWidth(width, 8),
        alignItems: "center",
        gap: calculateWidth(width, 12),
        alignSelf: "stretch",
        flexDirection: "row",
      },
      icon: {
        display: "flex",
        width: calculateWidth(width, 34),
        height: calculateWidth(width, 34),
      },
      titleAndDate: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
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
        color: "rgba(255, 255, 255, 0.60)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      priceAndStatus: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
      },
      price: {
        color: "#FFF",
        fontSize: calculateWidth(width, 14),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 20),
      },
      status: {
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
    });
  }, [width, height]);

  const filter = [
    {
      value: 0,
      label: "All",
    },
    {
      value: 1,
      label: "Pending",
    },
    {
      value: 2,
      label: "Completed",
    },
    {
      value: 3,
      label: "Withdrawal",
    },
    {
      value: 4,
      label: "Deposit",
    },
  ];

  const transactions = [
    {
      id: 1,
      icon: require("@/assets/images/emoticons/ethereum-badge.png"),
      title: "Withdrawal",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 80K",
      status: "Completed",
    },
    {
      id: 2,
      icon: require("@/assets/images/emoticons/bitcoin-badge.png"),
      title: "Deposit",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 120K",
      status: "Completed",
    },
    {
      id: 3,
      icon: require("@/assets/images/emoticons/cardano-badge.png"),
      title: "Transfer",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 40K",
      status: "Pending",
    },
    {
      id: 4,
      icon: require("@/assets/images/emoticons/tether-badge.png"),
      title: "Exchange (USDT → BTC)",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 110K",
      status: "Completed",
    },
    {
      id: 5,
      icon: require("@/assets/images/emoticons/bitcoin-badge.png"),
      title: "Deposit",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 550K",
      status: "Completed",
    },
    {
      id: 6,
      icon: require("@/assets/images/emoticons/bitcoin-badge.png"),
      title: "Deposit",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 70K",
      status: "Completed",
    },
    {
      id: 7,
      icon: require("@/assets/images/emoticons/cardano-badge.png"),
      title: "Transfer",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 90K",
      status: "Pending",
    },
    {
      id: 8,
      icon: require("@/assets/images/emoticons/ethereum-badge.png"),
      title: "Withdrawal",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 110K",
      status: "Completed",
    },
    {
      id: 9,
      icon: require("@/assets/images/emoticons/tether-badge.png"),
      title: "Exchange (USDT → BTC)",
      date: "Dec 15, 2024, 09:12 AM",
      price: "CHF 320K",
      status: "Completed",
    },
  ];

  const getColor = (status: String) => {
    switch (status) {
      case "Completed":
        return "#53C21C";
      case "Pending":
        return "#F9AD14";
      default:
        return "#53C21C";
    }
  };

  return (
    <ScrollView>
      <Text style={styles.description}>
        Track all your past transactions in one place. Easily review your
        deposits, withdrawals, investments, and other activities.
      </Text>
      <View style={styles.divider}>
        <Divider />
      </View>
      <ScrollView>
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
      </ScrollView>
      <View style={styles.transactionList}>
        {transactions.map((item) => (
          <View key={item.id} style={styles.transactionItem}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.titleAndDate}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.priceAndStatus}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={{ ...styles.status, color: getColor(item.status) }}>
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
