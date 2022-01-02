import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Color from "./components/properties/color";
import Opacity from "./components/properties/opacity";
import Position from "./components/properties/position";
import Scale from "./components/properties/scale";
import Size from "./components/properties/size";
import Translate from "./components/properties/translate";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Opacity /> */}
      {/* <Translate /> */}
      {/* <Scale /> */}
      {/* <Size /> */}
      {/* <Position /> */}
      <Color />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
