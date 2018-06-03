import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch, Hr} from 'react-native';


export default class Ressursbank extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false,
      favIkon: "✩"
    }
  }

  endreFavIkon = () => {
    this.setState({ favIkon: "★"});
  };

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
        <View style={styles.ressursKategoriBlokk}>
          <TouchableOpacity
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text style={styles.ressursKategoriNavn}>I skolegården</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />

          <TouchableOpacity style={styles.ressursTittel}>

             <Text numberOfLines={1}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>🗣</Text>
            Hva gjør jeg når noen krangler?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ressursTittel}
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text numberOfLines={1}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>📽</Text>
            Hva gjør jeg når noen slår?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ressursKategoriBlokk}>
          <TouchableOpacity>
            <Text style={styles.ressursKategoriNavn}>I klasserommet</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />
          <TouchableOpacity style={styles.ressursTittel}
          onPress={() => this.props.skjermBytte('Forumpost')}>
            <Text numberOfLines={1}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>🗣</Text>
            Hvordan hjelpe et barn som har lukket seg? </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ressursTittel}>
            <Text numberOfLines={1}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>📽</Text>

            Mobbing - enkelt forklart for barn</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ressursKategoriBlokk}>
          <TouchableOpacity>
            <Text style={styles.ressursKategoriNavn}>Foreldremøte</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />
          <TouchableOpacity style={styles.ressursTittel}   onPress={() => this.props.skjermBytte('FMRessurs1')}>
            <Text numberOfLines={2}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>📋</Text>

          Hvordan snakke med foreldre om at deres barn mobber</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ressursTittel}>
            <Text numberOfLines={2}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>📋</Text>

            Hvordan skal foreldre involveres i mobbesaker?</Text>
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
