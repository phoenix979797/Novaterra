import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";

export default function Discover() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => {
    return StyleSheet.create({
      discover: {
        marginBottom: 150,
      },
    });
  }, [width, height]);

  return (
    <ScrollView style={styles.discover}>
      <Text>Discover</Text>
    </ScrollView>
  );
}
