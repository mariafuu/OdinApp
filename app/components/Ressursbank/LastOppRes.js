import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableHighlight, TouchableOpacity,
   TextInput, Switch, ScrollView} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

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
            Last opp ressurs
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
            <TouchableOpacity>
            <ModalDropdown textStyle={styles.modalDropdown}  defaultValue={'⌄ Velg kategori'}
            options={['I klasserommet', 'Nettmobbing', 'I skolegården', 'Foreldremøte']}/>
            </TouchableOpacity>
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

              <Text style={styles.mellomOverskrift}>Velg fil:</Text>
              <View
                style={{
                  borderBottomColor: '#1ba6cf',
                  borderBottomWidth: 1,
                }}
              />
              <TouchableOpacity>
              <Text style={styles.filValg}>Mobbing_langtidseffekter.pdf</Text>
              </TouchableOpacity>
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
    marginLeft: 5,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  vanligKnapp: {
    flex: 1,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#fcc6c2',
    borderRadius: 15,
    borderWidth: 3,
    margin: 3
  },
  tittelInput: {
    padding: 10,

    backgroundColor: 'white',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
  },
  textInputStyle: {
    padding: 10,

    height: 100,
    backgroundColor: 'white',
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

  modalDropdown: {
    fontSize: 15,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    fontWeight: 'bold',
    padding: 5,
    margin: 5
  },

  filValg: {
    fontSize: 15,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    fontWeight: 'bold',
    padding: 5,
    margin: 5

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
