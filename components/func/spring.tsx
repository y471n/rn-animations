import React, { useRef } from "react";
import { TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

// Using Interpolation

const Spring = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const animatedStyles = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 2,
      tension: 40,
      friction: 2,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
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

export default Spring;
