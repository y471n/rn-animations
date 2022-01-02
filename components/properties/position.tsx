import React, { useRef } from "react";
import { TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

const Position = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={{ ...styles.box, ...animatedStyles }} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
    // width: 100,
    height: 100,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Position;
