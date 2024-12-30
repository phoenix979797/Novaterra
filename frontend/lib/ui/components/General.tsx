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
import { ProgressBar } from "react-native-paper";
import { calculateWidth } from "../../utils";
import { GeneralMainImage, GeneralSubImage } from "../svgs";

export default function General(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      image: {
        marginHorizontal: calculateWidth(width, -30),
        marginTop: calculateWidth(width, 10),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: calculateWidth(width, 300),
      },
      mainImage: {
        margin: calculateWidth(width, 5.6),
        flexShrink: 0,
      },
      mainBack: {
        position: "absolute",
      },
      secondaryImages: {
        display: "flex",
        flexDirection: "row",
        gap: calculateWidth(width, 22),
        position: "absolute",
        width: "auto",
        zIndex: -2,
        opacity: 0.5,
      },
      secondaryImage: {
        width: calculateWidth(width, 220),
        height: calculateWidth(width, 210),
      },
      discoverCard: {
        marginHorizontal: calculateWidth(width, 16.5),
        marginTop: calculateWidth(width, 10),
        marginBottom: calculateWidth(width, 24),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        width: calculateWidth(width, 140),
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
        gap: calculateWidth(width, 4),
        paddingHorizontal: calculateWidth(width, 16),
        paddingTop: calculateWidth(width, 10),
        width: "100%",
      },
      progressBar: {
        backgroundColor: "rgba(148, 148, 148, 0.20)",
      },
      amountValue: {
        color: "#FFF",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 24),
        textAlign: "center",
      },
      amountSubValue: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
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
        marginTop: calculateWidth(width, 23),
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
      <View style={styles.image}>
        <GeneralMainImage
          href={require("@/assets/images/company.png")}
          style={styles.mainImage}
        />
        <View style={styles.secondaryImages}>
          <GeneralSubImage
            href={require("@/assets/images/company1.png")}
            style={styles.secondaryImage}
          />
          <GeneralSubImage
            href={require("@/assets/images/company2.png")}
            style={styles.secondaryImage}
          />
        </View>
      </View>
      <View style={styles.discoverCard}>
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
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Invest</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
