import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch, Alert} from 'react-native';


export default class Ressursbank extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false,
      favIkon: "✩"
    }
  }

  ShowAlertDialogLastNed = () =>{

    Alert.alert(
      'Last ned',
      'Vil du laste ned ressursen til mobilen?',
      [
        {text: 'Avbryt', onPress: () => console.log('Avbryt trykt')},
        {text: 'Ja', onPress: () => console.log('Ressurs lastet ned'), style: 'cancel'},
      ]
    )
    }

    ShowAlertDialogEpost = () =>{
      Alert.alert(
        'Send til epost',
        'Vil du sende ressursen til epost?',
        [
          {text: 'Avbryt', onPress: () => console.log('Avbryt trykt')},
          {text: 'Ja', onPress: () => console.log('Ressurs lastet ned'), style: 'cancel'},
        ]
      )
    }

  endreFavIkon = () => {
    this.setState({ favIkon: "★" });
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
          <TouchableOpacity>
            <Text numberOfLines={2} style={styles.ressursKategoriNavn}>
            <Text style={styles.favorittIkon} onPress={this.endreFavIkon}>{this.state.favIkon}
            </Text>
            <Text style={styles.ressursIkon}>📋</Text>
            Hvordan snakke med foreldre om at deres barn mobber</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#1ba6cf',
              borderBottomWidth: 1,
            }}
          />
          <TouchableOpacity style={styles.ressursTittel}>
            <Text>
            Kort tekst med instrukser og råd for hvordan man går frem for å
            forklare foreldre at barnet deres mobber. </Text>
          </TouchableOpacity>

      <View style={styles.ressursKategoriBlokk}>
        <TouchableOpacity>
        <Text numberOfLines={15}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel
        aliquam elit. Phasellus sit amet nunc urna. Fusce eu augue nulla. Ut aliquam
         elit eu condimentum ultricies. Integer et urna sed odio placerat accumsan id
         eu nisi. Suspendisse elementum, magna at mattis consequat, urna sapien
         pellentesque dolor, eu ultrices purus arcu at
         ligula. Fusce elementum interdum placerat. Sed rutrum lectus in ligula ultrices
         congue. Suspendisse nec convallis purus. </Text>
        </TouchableOpacity>
        </View>


        </View>


        </ScrollView>

        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.vanligKnapp}
            onPress={this.ShowAlertDialogLastNed}
          >
            <Text>Last ned</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.vanligKnapp}
              onPress={this.ShowAlertDialogEpost}
            >
              <Text>Send til e-post</Text>
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
    backgroundColor: '#e0ffff'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'

  },

  container2: {
    flex:1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    marginBottom: 50,
    marginLeft: 10,
    marginRight:10

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
},

vanligKnapp: {
  backgroundColor: 'rgba(237, 249, 255, 0.5)',
  height: 40,
  width: 130,
  padding: 5,

  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#fcc6c2',
  borderRadius: 50,
  borderWidth: 3,

},


});
