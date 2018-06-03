import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch, Hr} from 'react-native';


export default class Ressursbank extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false,

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
            Lovverk
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>


      <ScrollView style={styles.ressursListe}>
        <View style={styles.ressursKategoriBlokk}>
          <TouchableOpacity>
            <Text style={styles.ressursKategoriNavn}>Opplæringslova – oppll</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />

          <TouchableOpacity style={styles.ressursTittel}>

             <Text numberOfLines={4}>§ 1-1. Formålet med opplæringa:
Opplæringa i skole og lærebedrift skal, i samarbeid og forståing med heimen,
opne dører mot verda og framtida og gi elevane og lærlingane historisk og kulturell innsikt og forankring...

</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.ressursKategoriBlokk}>
          <TouchableOpacity>
            <Text style={styles.ressursKategoriNavn}>Læreplan i engelsk (ENG1-03)</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />

          <TouchableOpacity style={styles.ressursTittel}>

             <Text numberOfLines={4}>Formål:
Engelsk er et verdensspråk.
I møte med mennesker fra andre land,
hjemme eller på reiser, har vi ofte bruk
for engelsk. Engelsk brukes i film, litteratur, sang, sport, handel, produkter,
vitenskap, og teknologi, og gjennom disse bruksområdene har mange engelske ord
og uttrykk funnet veien til våre egne språk. Når vi skal lete etter informasjon
ut fra våre egne interesser eller i faglig sammenheng, skjer dette ofte på engelsk.
 I tillegg brukes engelsk i økende grad i utdanning og som arbeidsspråk i mange bedrifter...

</Text>
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
    backgroundColor: '#4682b4'
  },

  toolbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff'
  },
  toolbarFont: {
    fontSize:20,
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

ressursIkon: {
  fontSize: 35,
},

favorittIkon: {
  fontSize: 35
}


});
