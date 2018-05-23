import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Switch, ScrollView, Alert } from 'react-native';

export default class Favoritter extends Component {
  constructor(){
    super();
    this.state ={
      textValue:'Hello',
      switchValue: false
    }
  }

  ShowAlertDialog = () =>{

    Alert.alert(
      'Fjerne fra favoritter',
      'Fjerne dette innlegget fra favoritter?',
      [
        {text: 'Avbryt', onPress: () => console.log('Ask me later Button Clicked')},
        {text: 'Ja', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},
      ]
    )
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
            Mine Favoritter
          </Text>
        </View>
        <TouchableOpacity
          style={{flex:1}}
          onPress={() => this.props.skjermBytte('SearchResult')}>
            <Text style={styles.toolbarFont}>Søk</Text>
        </TouchableOpacity>
      </View>
          <ScrollView style={styles.favorittliste}>
            <View style={styles.favorittItem}>
              <TouchableOpacity onPress={this.ShowAlertDialog}>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Hva gjør jeg når noen krangler?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Kan jeg si dette til ei jente i klassen?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Er det greit å gå ut med dette i media?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Sjekkliste varsling</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Mobbesak opp i lagmanssretten</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Hvordan gå frem for å varsle</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Læreres etiske plattform</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Taushetsplikten kort og enkelt forklart</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.favorittItem}>
              <TouchableOpacity>
                <Image
                  style={styles.stjerne}
                  source={require('../pictures/favourites_star.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorittTittel}>
                <Text>Oppgavesett digital mobbing </Text>
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
    padding: 5,
    marginRight: 5
  },
  favorittliste: {
    paddingTop: 20,
  },
  favorittItem: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
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
    backgroundColor: '#e0ffff'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#1ba6cf'
  }

})
