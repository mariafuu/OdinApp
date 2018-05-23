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
            Om appen
          </Text>
          </View>
  </View>
  <ScrollView style={styles.ressursListe}>
    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Hva er MobbeFri-appen?</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity style={styles.ressursTittel}>
        <Text>MobbeFri-appen er en app app med delingsarena og ressursbank
        (læremateriale, linker, etc) for bruk av lærere med det formål å
        forebygge mobbing og hjelpe mobbeutsatte.</Text>

      </TouchableOpacity>

    </View>
    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Hvordan brukes appen?</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity style={styles.ressursTittel}>
        <Text>Appen består av en ressursbank og en delingsarena. Appen krever
        pålogging via FEIDE for å kunne anvende og bidra med ressurser og delta
        i delingsarenaen. Trykk på "Ressursbank" på forsiden eller i meny etter
        innlogging, eller søk etter nøkkelord. Ressurser er kategorisert etter
        tema/målområde. Du kan sendes videre til eksterne ressurser, eller laste ned
        interne ressurser til din enhet. Du kan og laste opp dine egne. Vi setter
        pris på ditt bidrag!
          {"\n"}{"\n"}
        Delingsarenaen er et forum for å dele erfaringer.
        Du kan se de nyeste innleggene på forsiden, og svare på de ved å trykke
        på et enkelt innlegg. Du kan herfra også rapportere upassende innlegg eller
        foreslå innlegget til ressursbanken. Trykk på "Nytt innlegg" på forsiden
        og du kan skrive ditt eget. Velg en passende kategori, tittel og tagger hvis
        du ønsker. Trykk her for flere instruksjoner. Du kan også finne de i menyen.
        Spør gjerne om hjelp på delingsarenaen også!</Text>

      </TouchableOpacity>

    </View>

    <View style={styles.ressursKategoriBlokk}>
      <TouchableOpacity>
        <Text style={styles.ressursKategoriNavn}>Hvem er OdinStiftelsen?</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#1ba6cf',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity style={styles.ressursTittel}>
        <Text>OdinStiftelsen er eier og administrator av appen.
        OdinStiftelsen ble etablert høsten 2014, til minne om Odin (13),
        som tok sitt liv etter mange års kamp mot mobbing. Hans utsagn
        - "Det hjelper ikke å si ifra - de gjør ikke noe uansett" har blitt
        utgangspunktet og drivkraften for det arbeidet stiftelsen skal drive
         med. Odins mamma, Katrine Olsen Gillerdalen, ønsker med OdinStiftelsen
          å bidra til en endret oppfatning i samfunnet som gjør at alle barn
          kan oppleve å bli sett, hørt og tatt på alvor!

          Klikk her for å gå til OdinStiftelsens nettside for mer info. </Text>

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
