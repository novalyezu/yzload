# react-native-yzload

Simple lazy load effect in React Native

# Installation

`$ npm i react-native-yzload --save`

## Option: With react-native link

`$ react-native link react-native-yzload`

# Usage

```
import Yzload from 'react-native-yzload'

let yourset = {
    width: 100,
    height: 100,
    duration: 1500,
    inputRange: [0, 0.5, 1], // start at 0 and end at 1
    outputRange: ["#adadad", "#f9f9f9", "#adadad"] // same as inputRange length
}

<Yzload setprop={yourset} />
```
