# react-native-yzload

Simple lazy load effect in React Native

![Yzload Example](https://res.cloudinary.com/dtcowpb5k/image/upload/v1551882362/ezgif.com-video-to-gif.gif)

# Installation

`$ npm i react-native-yzload --save`

## Option: With react-native link

`$ react-native link react-native-yzload`

# Usage

```
import Yzload from 'react-native-yzload'

let defaultset = {
    width: 100,
    height: 100,
    duration: 1500,
    inputRange: [0, 0.5, 1], // start at 0 and end at 1
    outputRange: ["#adadad", "#f9f9f9", "#adadad"] // same as inputRange length
}

<Yzload setprop={defaultset} />
```
# Example

```
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import Yzload from "react-native-yzload";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      image: "https://avatars3.githubusercontent.com/u/25294210?s=460&v=4",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }

  render() {
    let imageset = {
      width: 200, // default 100
      height: 200, // default 100
      duration: 2000, // default 1500
      inputRange: [0, 0.5, 1], // start at 0 and end at 1 // default [0, 0.5, 1]
      outputRange: ["#adadad", "#f9f9f9", "#adadad"] // same as inputRange length // default ["#adadad", "#f9f9f9", "#adadad"]
    };

    let textset = {
      width: 160,
      height: 23,
      duration: 2000
    };

    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View>
            <Yzload setprop={imageset} />
            <View style={styles.textLoading}>
              <Yzload setprop={textset} />
            </View>
          </View>
        ) : (
          <View>
            <Image source={{ uri: this.state.image }} style={styles.image} />
            <Text style={styles.text}>Noval Vatria Yezu</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textLoading: { marginTop: 10 },
  image: { width: 200, height: 200 },
  text: { fontWeight: "bold", fontSize: 20, marginTop: 10 }
});
```

