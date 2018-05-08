import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Switch, ScrollView, Alert } from 'react-native';

export default class SearchResult extends Component {
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
  onChangeText1(value){
    this.setState({
      textValue:value
    });
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
    backgroundColor: '#4682b4'
  },
  stjerne: {
    height: 35,
    width: 35,
    padding: 3
  },
  favorittTittel: {
    padding: 5
  },
  favorittliste: {
    padding: 20
  },
  favorittItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#e0ffff',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 2
  },
  overskriftBox: {
    backgroundColor: '#e0ffff',
    padding: 10
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
