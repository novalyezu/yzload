import React, { Component } from "react";
import { Animated } from "react-native";

export default class Yzload extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.setProp = {};

    if (this.props.setprop !== undefined) {
      this.width = 100;
      this.height = 100;
      this.duration = 1500;
      this.inputRange = [0, 0.5, 1];
      this.outputRange = ["#adadad", "#f9f9f9", "#adadad"];

      if (this.props.setprop.width !== undefined) {
        this.width = this.props.setprop.width;
      }

      if (this.props.setprop.height !== undefined) {
        this.height = this.props.setprop.height;
      }

      if (this.props.setprop.duration !== undefined) {
        this.duration = this.props.setprop.duration;
      }

      if (this.props.setprop.inputRange !== undefined) {
        this.inputRange = this.props.setprop.inputRange;
      }

      if (this.props.setprop.outputRange !== undefined) {
        this.outputRange = this.props.setprop.outputRange;
      }

      this.setProp = {
        width: this.width,
        height: this.height,
        duration: this.duration,
        inputRange: this.inputRange,
        outputRange: this.outputRange
      };
    } else {
      this.setProp = {
        width: 100,
        height: 100,
        duration: 1500,
        inputRange: [0, 0.5, 1],
        outputRange: ["#adadad", "#f9f9f9", "#adadad"]
      };
    }
  }

  componentDidMount() {
    this.animateBackgroundColor();
  }

  animateBackgroundColor = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.setProp.duration
    }).start(() => {
      this.animateBackgroundColor();
    });
  };

  render() {
    const backgroundColorVar = this.animatedValue.interpolate({
      inputRange: this.setProp.inputRange,
      outputRange: this.setProp.outputRange
    });

    return (
      <Animated.View
        style={{
          width: this.setProp.width,
          height: this.setProp.height,
          backgroundColor: backgroundColorVar
        }}
      />
    );
  }
}
