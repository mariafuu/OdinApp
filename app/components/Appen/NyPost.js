import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableHighlight, TouchableOpacity,
   TextInput, Switch, ScrollView} from 'react-native';

export default class NyPost extends Component {
  constructor(){
    super();
    this.state ={
      textT: '',
      textI: '',
      textTag: '',
      kategori: ''
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
            Nytt innlegg
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
          <View style={styles.mainBox}>
            <View style={styles.pickerStyle}>
              <Picker
                selectedValue={this.state.language}
                kategori={this.state.language}
                style={{ height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="I klasserommet" value="klasserom" />
                  <Picker.Item label="Digital mobbing" value="digitalMobbing" />
              </Picker>
            </View>

            <View>
              <View>
              <View>
                <Text style={styles.mellomOverskrift}>Tittel</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#1ba6cf',
                  borderBottomWidth: 1,
                }}
              />
              <TextInput
                style={styles.tittelInput}
                placeholder="Tittel"
                onChangeText={(textT) => this.setState({textT})}
              />
              </View>
              <View>
              <View>
              <Text style={styles.mellomOverskrift}>Tekst</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#1ba6cf',
                  borderBottomWidth: 1,
                }}
              />
                <TextInput
                  multiline
                  style={styles.textInputStyle}
                  placeholder="Skriv innlegget ditt her"
                  onChangeText={(textI) => this.setState({textI})}
                />
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.mellomOverskrift}>Tagger</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#1ba6cf',
                  borderBottomWidth: 1,
                }}
              />
              <TextInput
                style={styles.tittelInput}
                placeholder="Skriv inn nøkkelord"
                onChangeText={(textTag) => this.setState({textTag})}
              />
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity
                style={styles.vanligKnapp}
                onPress={() => this.props.skjermBytte('Forside')}
              >
                <Text>Avbryt</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.vanligKnapp}
              onPress={() => this.props.skjermBytte('TestPost')}
              >
                <Text>Legg ut innlegg</Text>
              </TouchableOpacity>
            </View>

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
  mellomOverskrift: {
    color: '#02013a',
    fontSize: 20,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  vanligKnapp: {
    backgroundColor: '#fcc6c2',
    height: 40,
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tittelInput: {
    padding: 10,
    width: 350,
    backgroundColor: 'white',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
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
  pickerStyle: {
    height: 50,
    width: 200,
    backgroundColor: '#e0ffff',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
  },
  container1: {
    flex:2,
    flexDirection: 'row',
    backgroundColor: '#afeeee',
    justifyContent: 'space-between'
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#e0ffff',
    justifyContent: 'space-between'
  },
  box1: {
    flex:1,
    backgroundColor: '#00ced1',
    padding:10,
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
    flex:10
  },
  linkBox: {
    flex:1
  },
  toolbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0ffff'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'
  }

})
