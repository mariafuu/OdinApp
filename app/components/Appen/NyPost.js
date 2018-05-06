import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableHighlight, TouchableOpacity,
   TextInput, Switch} from 'react-native';

export default class NyPost extends Component {
  constructor(){
    super();
    this.state ={
      textT: '',
      textI: '',
      textTag: '',
      switchValue: false
    }
  }

  render() {
    return (

      <View style={styles.background}>
          <View style={styles.newsView}>
            <Text>Nyhetssaker og sånt</Text>
            <Text>Hallo</Text>
          </View>
          <View style={styles.mainBox}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="I klasserommet" value="klasserom" />
                <Picker.Item label="Digital mobbing" value="digitalMobbin" />
            </Picker>

            <View>
              <TextInput
                style={{padding: 10}, {width: 150}}
                placeholder="Tittel"
                onChangeText={(textB) => this.setState({textT})}
              />
              <TextInput
                style={{padding: 10}, {width: 150}, {height: 200}}
                placeholder="Skriv innlegget ditt her"
                onChangeText={(textB) => this.setState({textI})}
              />
            </View>
            <View>
              <Text>Tagger</Text>
              <TextInput
                style={{padding: 10}, {width: 150}}
                placeholder="Skriv inn nøkkelord"
                onChangeText={(textB) => this.setState({textTag})}
              />
            </View>
            <View>
              <Switch
                value={this.state.switchValue}
              />
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4682b4'
  },
  newsView: {
    flex:1,
    backgroundColor: 'blue',
    padding:5
  },
  newsText: {
    color: 'white'
  },
  container1: {
    flex:2,
    flexDirection: 'row',
    backgroundColor: '#afeeee',
    justifyContent: 'space-between'
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#e0ffff',
    justifyContent: 'space-between'
  },
  box1: {
    flex:1,
    backgroundColor: '#00ced1',
    padding:10,
    justifyContent: 'center'
  },
  box3: {
    flex:1
  },
  smallBox: {
    flex:1,
    backgroundColor: '#e0ffff',
    padding:2,
    justifyContent: 'center'
  },
  mainBox: {
    flex:10
  },
  linkBox: {
    flex:1
  }

})
