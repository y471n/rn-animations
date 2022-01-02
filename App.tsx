import React from "react";
import { StyleSheet, View } from "react-native";
import Opacity from "./components/properties/opacity";
import Translate from "./components/properties/translate";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Opacity /> */}
      <Translate />
    </View>
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
