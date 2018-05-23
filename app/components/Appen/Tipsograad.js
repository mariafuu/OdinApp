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
            Tips & Råd
          </Text>
          </View>
  </View>
  <ScrollView style={styles.ressursListe}>
    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Kommunikasjon</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity style={styles.ressursTittel}>
        <Text>Har du snakket med alle involverte parter? Husk at både mobbeutsatt
        og mobber skal høres, og foreldre skal involveres. Har du varslet til
        riktig instans?</Text>
      </TouchableOpacity>

    </View>

    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Varslingsplikt og følelser</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity style={styles.ressursTittel}>
        <Text>En lærer har varslingsplikt om mobbing der en elev føler seg
        mobbet, uansett om læreren bevitnet mobbingen eller har annet bevis.
      </Text>
      </TouchableOpacity>


    </View>

    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Oppgaver og aktiviteter</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity style={styles.ressursTittel}>
        <Text>Å lære elever om mobbing trenger ikke bestå av en tørr video eller
        foiler. Som alt annet hjelper det å engasjere elevene i det de skal lære om.
        Sjekk ressursbanken for mange ideér til oppgavesett!</Text>
      </TouchableOpacity>


    </View>
    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Forståelse</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity style={styles.ressursTittel}>
        <Text>Det er vanskeligere å mobbe noen man har full forståelse for.
        Det er mange måter å lære elever om mangfoldet i klassen sin og
        andres situasjoner uten at det føles påtvunget og usubtilt. Se
        gjerne i ressursbanken eller spør i delingsarenaen om spesifikke råd!</Text>
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
