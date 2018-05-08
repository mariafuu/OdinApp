import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Switch } from 'react-native';

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
            Dette vil bli en toolbar!
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.overskriftBox}>
        <Text style={styles.overskrift}>Søkeresultat</Text>
      </View>
      <ScrollView style={styles.favorittliste}>
        <View style={styles.favorittItem}>
          <TouchableOpacity
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favorittTittel}
          onPress={() => this.props.skjermBytte('VideoRessurs')}>
            <Text>Hva gjør jeg når noen krangler?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.favorittItem}>
          <TouchableOpacity>
            <Text>Dokument</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favorittTittel}>
            <Text>Kan jeg si dette til ei jente i klassen?</Text>
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
    backgroundColor: '#00CED1'
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
    backgroundColor: '#00CED1',
    justifyContent: 'space-between',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
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
