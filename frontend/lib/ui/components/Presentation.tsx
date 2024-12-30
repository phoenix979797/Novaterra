import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { calculateWidth } from "../../utils";
import { PresentationCard } from "../svgs";

export default function Presentation(props: any) {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: calculateWidth(width, 16),
        marginBottom: calculateWidth(width, 12),
        paddingHorizontal: calculateWidth(width, 16),
        paddingVertical: calculateWidth(width, 12),
      },
      section: {
        display: "flex",
        flexDirection: "column",
        gap: calculateWidth(width, 4),
        alignSelf: "stretch",
      },
      title: {
        color: "#FFF",
        fontSize: calculateWidth(width, 18),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 28),
      },
      text: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 16),
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: calculateWidth(width, 24),
      },
      cardContainer: { display: "flex", width: "100%", flexDirection: "row" },
      card: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: calculateWidth(width, 303),
      },
      cardBack: {
        width: calculateWidth(width, 160),
        height: calculateWidth(width, 305),
        flexShrink: 0,
        position: "absolute",
      },
      cardTitle: {
        color: "#FFF",
        fontSize: calculateWidth(width, 18),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 28),
        marginTop: calculateWidth(width, 39),
        paddingHorizontal: calculateWidth(width, 20),
        textAlign: "center",
      },
      cardBody: {
        color: "rgba(255, 255, 255, 0.70)",
        fontSize: calculateWidth(width, 12),
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: calculateWidth(width, 15),
        paddingHorizontal: calculateWidth(width, 20),
        marginTop: calculateWidth(width, 8),
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
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>
            Summary of the Investment Opportunity
          </Text>
          <Text style={styles.text}>Promotion of a 3-story building</Text>
          <Text style={styles.text}>
            {`
The Lorena operation is carried out by the QUATTRO group, led by the QUATTRO family, which has been involved in construction for several generations. The operation is a real estate promotion project located in the southeast of France, in Draguignan, Var at 56 Av. du 4 Septembre. The Lorena residence consists of 8 apartments with rooftop terraces on each floor, along with 16 covered parking spaces on the ground floor, adding to the overall appeal.

The operators have acquired the land using their own funds, obtained a construction permit without appeal, and began work on 02/19/2024. As of today, the structural floor plan of R+3 has been completed, showing significant progress on the project.

RAIZERS has been solicited to finance the remaining works. EURO CONCEPT PROMOTION will borrow €1,580,000 at an 11.5% interest rate for 18 months. The loan is secured by two first-ranking mortgages and personal guarantees from the operators.`}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Collateral Taken for the Loan:</Text>
          <Text style={styles.text}>
            {` • Two first-ranking mortgages (39% LTV): One first-ranking mortgage for the operation and another first-ranking mortgage on a different asset.
 • Personal guarantees from the operators.`}
          </Text>
        </View>
        <View style={{ ...styles.section, alignItems: "center" }}>
          <Text style={styles.title}>Strengths and Weaknesses Analysis</Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <PresentationCard style={styles.cardBack} color="#3FB541" />
              <Text style={styles.cardTitle}>Strength</Text>
              <Text style={styles.cardBody}>
                {`1. Significant progress
  on the work: the R+3
  floor is completed.
2. Cash flow
  management with
  RAIZERS' control over
  disbursements.
3. Large investment
  from the operators
  (30% already
  committed to the
  project).`}
              </Text>
            </View>
            <View style={styles.card}>
              <PresentationCard style={styles.cardBack} color="#F5B300" />
              <Text style={styles.cardTitle}>Points of Attention</Text>
              <Text style={styles.cardBody}>
                {`1. Current geopolitical
  situation may impact
  commercialization.
2. Project sold in the
  long term.`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Coverage</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.text, color: "#FFF" }}>RAIZERS Loan</Text>
            <Text style={styles.title}>$1,580,000</Text>
          </View>
        </View>
        <Text style={styles.title}>Operation</Text>
        <View style={styles.section}>
          <Text style={styles.title}>Active</Text>
          <Text style={styles.text}>
            {`Real estate development project aimed at the construction of a building with R+3 levels, comprising 8 apartments of types T3 and T4 with terraces, as well as 16 covered parking spaces. The land, acquired in December 2021 with equity funds, has benefited from the granting and clearing of a building permit since June 2022.
The works, also self-financed, began on February 19, 2024. To date, the construction of the R+3 floor has been completed.`}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.text}>
            Located in the department of Var, Draguignan is a city of nearly
            39,000 inhabitants. Its lively historic center hosts a typical
            Provençal market and a variety of shops. Just 40 km from the
            Mediterranean beaches, the city also offers quick access to the
            Verdon Gorges, ideal for outdoor activities. Well connected,
            Draguignan is served by the Les Arcs-Draguignan train station,
            located 10 km away, allowing you to reach Toulon in 30 minutes and
            Marseille in 1h30. Close to the A8 highway, it is approximately 90
            km from the airports of Nice and Toulon, and 130 km from Marseille.
          </Text>
          <Text style={styles.text}>
            Draguignan has many facilities and services, including schools
            (elementary, middle, and high schools), a courthouse, and a modern
            hospital. The city is distinguished by its dynamism.
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
