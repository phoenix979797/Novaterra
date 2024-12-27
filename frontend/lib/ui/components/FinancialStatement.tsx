import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { calculateWidth } from "../../utils";

export default function FinancialStatement(props: any) {
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
      amounts: {
        display: "flex",
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flex: 1,
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      vat: {
        display: "flex",
        width: calculateWidth(width, 49),
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        alignItems: "center",
        gap: calculateWidth(width, 10),
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      total: {
        display: "flex",
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flex: 1,
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      needs: {
        display: "flex",
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 10),
        alignItems: "center",
        gap: calculateWidth(width, 10),
        flex: 1,
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 18),
      },
      resources: {
        display: "flex",
        paddingVertical: calculateWidth(width, 8),
        paddingHorizontal: calculateWidth(width, 2),
        alignItems: "center",
        flex: 1,
        color: "rgba(255, 255, 255, 0.70)",
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
      <View style={styles.section}>
        <Text style={styles.title}>Operation Summary</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.items}>Items</Text>
            <Text style={styles.amounts}>Amounts</Text>
            <Text style={styles.vat}>VAT</Text>
            <Text style={styles.total}>Total</Text>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={17}
              color="white"
            />
          </View>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <View style={styles.row} key={item}>
              <Text style={styles.items} numberOfLines={1}>
                Revenue
              </Text>
              <Text style={styles.amounts} numberOfLines={1}>
                2,700,581
              </Text>
              <Text style={styles.vat} numberOfLines={1}>
                540,116
              </Text>
              <Text style={styles.total} numberOfLines={1}>
                3,240,698
              </Text>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={17}
                color="white"
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Financing Structure</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.needs}>Needs</Text>
            <Text style={styles.resources}>Resources</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.needs}>
              Total Acquisition Cost Incl. Tax (= total expenses Excl. Tax + VAT
              - financial fees - marketing fees)
            </Text>
            <View style={styles.resources}>
              <Text
                style={{
                  ...styles.resources,
                  borderBottomColor: "rgba(255, 255, 255, 0.05)",
                  borderBottomWidth: 1,
                }}
              >
                Operator's Equity Contribution: 739,185 € (32%)
              </Text>
              <Text style={styles.resources}>
                Bond Loan Issued on the Platform: 1,580,000 € (68%)
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.needs}>Total Needs: 2,319,185 €</Text>
            <Text style={styles.resources}>
              Total Resources: 2,319,185 € (100%)
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
