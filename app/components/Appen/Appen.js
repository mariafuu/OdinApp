import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput, Switch } from 'react-native';

export default class Appen extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false
    }
  }
  onPress1(){
    console.log('Box 1 Pressed');
  }
  onPress2(){
    console.log('Box 2 pressed');
  }
  onPress3(){
    console.log('Box 3 Pressed');
  }
  onPress4(){
    console.log('Box 4 pressed');
  }
  onPress5(){
    console.log('Box 5 pressed');
  }
  onChangeText1(value){
    this.setState({
      textValue:value
    });
  }

  render() {
    return (

      <View style={styles.background}>
            <View style={styles.container1}>
              <View style={styles.frontBox}>
              </View>

              <View style={styles.frontBox}>
              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress1}
              >
                  <Text style={styles.knappFont}>Hvordan varsle</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.box1}
                onPress={this.onPress2}
              >
                  <Text style={styles.knappFont}>Om appen og OdinStiftelsen</Text>
              </TouchableOpacity>
              </View>


            <View style={styles.frontBox}>
              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress3}
              >
                <View>
                  <Text style={styles.knappFont}>Hva skulle det stå her?</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress4}
              >
                <View>
                  <Text style={styles.knappFont}>Tips og råd</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.frontBox}>
            </View>
            </View>

            <TouchableOpacity
              style={styles.loggInn}
              onPress={() => this.props.skjermBytte('Login')}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Logg inn
                </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#00CED1'
  },
  container1: {
    flex:9,
    justifyContent: 'space-between',
    borderRadius: 4,
    borderWidth: 6
  },
  frontBox: {
    flex: 1,
    flexDirection: 'row'
  },
  loggInn: {
    flex: 1,
    backgroundColor: '#4682b4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    flex: 1,
    backgroundColor: '#fcc6c2',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  knappFont: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  mainBox: {
    flex:10
  }

})
