import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const Opacity = () => {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={{ ...styles.box, opacity: opacityAnim }} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  },
});

export default Opacity;
