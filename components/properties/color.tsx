import React, { useRef } from "react";
import { TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

// Using Interpolation

const Color = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "green"],
  });

  const animatedStyles = {
    backgroundColor: boxInterpolation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
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
    width: 100,
    height: 100,
  },
});

export default Color;
