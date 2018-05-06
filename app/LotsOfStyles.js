import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsView: {
    backgroundColor: 'blue',
    padding:5
  },
  newsText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height:100
  },
  box1: {
    flex:1,
    backgroundColor: 'red',
    padding:10
  },
  box2: {
    flex:1,
    backgroundColor: 'green',
    padding:10
  }

})
