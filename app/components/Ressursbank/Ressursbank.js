import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch, Hr} from 'react-native';


export default class Ressursbank extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false
    }
  }

  render() {
    return (

      <View style={styles.background}>
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('Meny')}>
            <Text style={styles.toolbarFont}>Meny</Text>
        </TouchableOpacity>
        <View style={{flex:4}}>
          <Text style={styles.toolbarFont}>
            Ressursbank
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>


      <ScrollView style={styles.ressursListe}>
        <View style={styles.ressursKategori}>
          <TouchableOpacity
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text>I skolegården</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text>Hva gjør jeg når noen krangler?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>Hvordan håndtere utfrysing?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ressursKategori}>
          <TouchableOpacity>
            <Text>I klasserommet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>Kan jeg si dette til ei jente i klassen?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>Mobbing - enkelt forklart for barn</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ressursKategori}>
          <TouchableOpacity>
            <Text>Foreldremøte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>Hvordan snakke med foreldre om at deres barn mobber</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>Hvordan skal foreldre involveres i mobbesaker?</Text>
          </TouchableOpacity>

        </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({


  background: {
    flex:1,
    backgroundColor: '#e8f8fd'
  },

  toolbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74d4f6'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'white',

  },

ressursListe: {
  padding: 10,
  margin: 10,
  backgroundColor: '#858fa0'
},

ressursKategori: {
  marginTop: 5,
  marginBottom: 5,
  backgroundColor: '#779ad6',
  fontSize: 20,
  color: '#011123'
},

ressursTittel: {

}
});
