import React, { useRef } from "react";
import { TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

const Translate = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
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

export default Translate;
