import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
  TextInput, Switch, ScrollView, Alert, Modal, Image } from 'react-native';

export default class Forumpost extends Component {
  constructor(){
    super();
    this.state ={
      modalVisible: false,
      svarNavn: 'Blå Ilder',
      svarDato: '10.05.18',
      svarTekst: 'Ta en skikkelig samtale med de barna som mobber. Det er absolutt ikke greit at de holder på sånn. Snakk med foreldrene deres også.'
    }
  }

  setModalVisible(visible){
    this.setState({modalVisible: visible});
  }

  ShowAlertDialog = () =>{

    Alert.alert(
      'Ressursbanken',
      'Vil du foreslå dette innlegget til ressursbanken?',
      [
        {text: 'Avbryt', onPress: () => console.log('Ask me later Button Clicked')},
        {text: 'Ja', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},
      ]
    )
    }

  onPress1(){
    console.log('Box 1 Pressed');
  }
  onPress2(){
    console.log('Box 2 pressed');
  }
  onChangeText1(value){
    this.setState({
      textValue:value
    });
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
            Delingsarena
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
          <View style={styles.overskrift}>
          <Image
            style={styles.stjerne}
            source={require('../pictures/favourites_star.png')}
            />
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
          <TouchableOpacity style={styles.vanligKnapp}  onPress={this.ShowAlertDialog}>
            <Text>Foreslå til Ressursbank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vanligKnapp}>
            <Text>Rapporter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.svarKnapp}
            onPress={() => {
              this.setModalVisible(true);
            }}
            >
            <Text style={styles.svartekst}>Svar</Text>
          </TouchableOpacity>
          </View>
        </View>

      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      >
        <View style={styles.background}>
          <View>
          </View>

          <View>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Skriv svaret ditt her"
              onChangeText={(svarTekst) => this.setState({svarTekst})}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.vanligKnapp}
              onPress={() => {
                this.setModalVisible(false);
              }}
            >
              <Text>Publiser svar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

        <View style={styles.svar}>
          <View style={styles.luft}>
          </View>

          <View style={styles.svarBox}>
            <View style={styles.navntittel}>
              <Text>{this.state.svarNavn}</Text>
              <Text>{this.state.svarDato}</Text>
            </View>
            <View>
              <Text>{this.state.svarTekst}</Text>
            </View>
          </View>
        </View>

        <View style={styles.svar}>
          <View style={styles.luft}>
          </View>

          <View style={styles.svarBox}>
            <View style={styles.navntittel}>
              <Text>Grønn Katt</Text>
              <Text>'06.05.18'</Text>
            </View>
            <View>
              <Text>Synes kanskje du burde ha en skikkelig samtale med
              de barna som mobber og prøve å forklare hvordan det er for hun/han
              som blir mobbet.</Text>
            </View>
          </View>
        </View>

        <View style={styles.svar}>
          <View style={styles.luft}>
          </View>

          <View style={styles.svarBox}>
            <View style={styles.navntittel}>
              <Text>Gul Røyskatt</Text>
              <Text>'02.05.18'</Text>
            </View>
            <View>
              <Text>Har du prøvd å snakke med klassen om forskjeller på familiers
              økonomi? Slik at de forstår at ikke alle er like heldige.</Text>
            </View>
          </View>
        </View>

        <View style={styles.svar}>
          <View style={styles.luft}>
          </View>

          <View style={styles.svarBox}>
            <View style={styles.navntittel}>
              <Text>Grønn Svane</Text>
              <Text>'01.05.18'</Text>
            </View>
            <View>
              <Text>Kanskje du kan ta dette opp i foreldresamtaler med de
              andre foreldrene slik at de kan snakke med barna sine om slikt</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4682b4'
  },
  overskrift: {
    flexDirection: 'row'
  },
  stjerne: {
    height: 35,
    width: 35,
    padding: 3
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
  svartekst: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30
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
    backgroundColor: '#e0ffff'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'
  }

})
