import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Switch, ScrollView } from 'react-native';

export default class VideoRessurs extends Component {
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
  onChangeText1(value){
    this.setState({
      textValue:value
    });
  }

  render() {
    return (
      <View style={styles.background}>
          <View style={styles.overskriftBox}>
            <Text style={styles.overskrift}>Når noen slår</Text>
          </View>
          <View style={styles.beskrivelse}>
            <Text style={styles.beskrivelseTekst}>Film som forklarer hvorfor enkelte barn slår og hvordan man
            skal takle slike situasjoner, både i situasjonen og forebyggende.
            </Text>
          </View>
          <TouchableOpacity style={styles.film}>
            <Text style={styles.filmTekst}>Klikk her for å gå til youtube.com for å se filmen.</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4682b4',
    padding: 5
  },
  beskrivelse: {
    backgroundColor:'#e0ffff',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2,
    padding: 5
  },
  beskrivelseTekst: {
    fontSize: 20
  },
  filmTekst: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  film: {
    backgroundColor:'#e0ffff',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5

  },
  overskriftBox: {
    backgroundColor: '#e0ffff',
    padding: 10,
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2
  },
  overskrift: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  container1: {
    flex:2,
    flexDirection: 'row',
    backgroundColor: '#afeeee',
    justifyContent: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#e0ffff',
    justifyContent: 'space-between',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2
  },
  button1: {
    width: 150,
    backgroundColor: '#00ced1',
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
    flex:10,
    padding: 5,
    justifyContent: 'space-between'
  },
  postBox: {
    height: 100,
    backgroundColor: '#afeeee'
  }

})
