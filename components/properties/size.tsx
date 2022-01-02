import React, { useRef } from "react";
import { TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

const Size = () => {
  const animation = useRef(new Animated.Value(100)).current;
  const animatedStyles = {
    width: animation,
    height: animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 100,
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

export default Size;
