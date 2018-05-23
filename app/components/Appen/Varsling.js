import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch, Navigation, Button} from 'react-native';


export default class Nyheter extends Component {
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
          <View style={{flex:4}}>
          <Text style={styles.toolbarFont}>
            Sjekkliste Varsling
          </Text>
          </View>
  </View>
  <ScrollView style={styles.ressursListe}>
    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Har du...</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity style={styles.ressursTittel}>
        <Text>... Hatt samtale med den mobbeutsatte?{"\n"}</Text>
        <Text>... Varslet til riktig instans? {"\n"}</Text>
        <Text>... Hatt samtale med foreldrene til alle involverte elever? {"\n"}</Text>
        <Text>... Skrevet rapportmelding? {"\n"}</Text>
        <Text>... Sjekket elevenes forhistorie? {"\n"}</Text>
        <Text>... Undersøkt om det er varslet tidligere? {"\n"}</Text>
        <Text>... Fått med alle påkrevde dokumenter? {"\n"}</Text>
      </TouchableOpacity>

    </View>


    </ScrollView>


  <View>
      <TouchableOpacity
        style={styles.vanligKnapp}
        onPress={() => this.props.skjermBytte('Appen')}
      >
        <Text>Gå tilbake</Text>
      </TouchableOpacity>
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

  toolbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff',
    paddingTop: 20,
  },
  toolbarFont: {
    fontSize:30,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'

  },
ressursListe: {
  paddingTop: 10,
  marginTop: 10,
  marginBottom: 10

},

ressursKategoriBlokk: {
  marginTop: 5,
  marginBottom: 5,
  padding: 5,
  backgroundColor: 'rgba(237, 249, 255, 0.5)',

},

ressursKategoriNavn: {
  color: '#02013a',
  fontSize: 20,

},

ressursTittel: {

},

vanligKnapp: {
  backgroundColor: 'rgba(237, 249, 255, 0.5)',
  height: 40,
  width: 100,
  padding: 5,
  marginLeft: 5,
  marginBottom: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#fcc6c2',
  borderRadius: 50,
  borderWidth: 3,

},


});
