import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
  TextInput, Switch, ScrollView } from 'react-native';

export default class TestPost extends Component {
  constructor(){
    super();
    this.state ={
      svarNavn: 'Blå Ilder',
      svarDato: '10.05.18',
      svarTekst: 'Ta en skikkelig samtale med de barna som mobber. Det er absolutt ikke greit at de holder på sånn. Snakk med foreldrene deres også.',
    }
  }

  render() {
    return (
      <ScrollView style={styles.background}>
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('Meny')}>
            <Text style={styles.toolbarFont}>Meny</Text>
        </TouchableOpacity>
        <View style={{flex:4}}>
          <Text style={styles.toolbarFont}>
            Dette vil bli en toolbar!
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>


        <View style={styles.mainPost}>
          <View>
            <Text>I klasserommet</Text>
          </View>

          <View>
            <Text style={styles.postTittel}>Hvordan hjelpe et barn som har lukket seg?</Text>
          </View>

          <View style={styles.navntittel}>
            <Text>Rød Høne</Text>
            <Text>'30.04.18'</Text>
          </View>

          <View style={styles.tekst}>
            <Text style={styles.tekstInnhold}>Et barn i klassen min har det ikke greit, barnet
            kommer fra et litt tustelig hjem og blir ofte mobbet pga
            klær, bustet hår, at ingen ser foreldrene o.l. Jeg forsøker
            å løse situasjonene, men det utsatte barnet har helt lukket
            seg og sier nesten aldri et ord. Barnet sitter stille og
            hører, men responderer særs lite. Har noen erfaring med
            dette? Hvordan kan jeg hjelpe dette flotte barnet?</Text>
          </View>

          <View style={styles.postKnapper}>
            <TouchableOpacity style={styles.vanligKnapp}>
              <Text>Foreslå til Ressursbank</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.vanligKnapp}>
              <Text>Rapporter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.svarKnapp}
              >
              <Text style={styles.svartekst}>Svar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4682b4',
    padding: 15
  },
  svarBox: {
    flex: 4,
    backgroundColor: '#e0ffff',
    padding: 5,
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  textInputStyle: {
    padding: 10,
    width: 350,
    height: 200,
    backgroundColor: 'white',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
  },
  svar: {
    flexDirection: 'row'
  },
  postKnapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  luft: {
    flex: 1
  },
  postTittel: {
    fontWeight: 'bold',
    fontSize: 20
  },
  navntittel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tekst: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#4682b4'
  },
  svarKnapp:{
    backgroundColor: '#fa9991',
    height: 40,
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  svartekst: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  },
  vanligKnapp: {
    backgroundColor: '#fcc6c2',
    height: 40,
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  tekstInnhold: {
    padding: 5
  },
  mainPost: {
    backgroundColor: '#e0ffff',
    padding: 10,
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  container1: {
    flex:9,
    justifyContent: 'space-between',
    borderRadius: 4,
    borderWidth: 6
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
  toolbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'white'
  }

})
