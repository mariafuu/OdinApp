import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
  TextInput, Switch } from 'react-native';

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
      <View style={styles.toolbar}>
        <View style={{flex:4}}>
          <Text style={styles.toolbarFont}>
            MobbeFri
          </Text>
        </View>
      </View>
            <View style={styles.container1}>
              <View style={styles.frontBox}>
              </View>

              <View style={styles.frontBox}>
              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress1}
              >
                  <Text style={styles.knappFont}>Nyheter</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.box1}
                onPress={this.onPress2}
              >
                  <Text style={styles.knappFont}>Tips & Råd</Text>
              </TouchableOpacity>
              </View>


            <View style={styles.frontBox}>
              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress3}
              >
                <View>
                  <Text style={styles.knappFont}>Sjekkliste varsling</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.box1}
              onPress={this.onPress4}
              >
                <View>
                  <Text style={styles.knappFont}>Om appen</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.frontBox}>
            </View>
            </View>

            <TouchableOpacity
              style={styles.loggInn}
              onPress={() => this.props.skjermBytte('Feide')}>
                <Text style={{color: '#1ba6cf', fontWeight: 'bold', fontSize: 20}}>
                  Logg inn{"\n"}
                </Text>

                <Text style={{color: '#1ba6cf'}}>For å gå til ressursbank og delingsarena</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4682b4'
  },
  container1: {
    flex:9,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  frontBox: {
    flex: 1,
    flexDirection: 'row'
  },
  loggInn: {
    flex: 1,
    backgroundColor: '#e0ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  box1: {
    flex: 1,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    padding:10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fcc6c2',
    borderRadius: 300,
    borderWidth: 3
  },
  knappFont: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  mainBox: {
    flex:10
  },

  toolbar: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff',
    paddingTop: 20,
  },
  toolbarFont: {
    fontSize:50,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'

  },

})
