import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity,
  TextInput, Switch, ScrollView } from 'react-native';

export default class Forside extends Component {
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
  onPress2(){
    console.log('Box 2 pressed');
  }
  onPress3(){
    console.log('Box 3 Pressed');
  }
  onPress4(){
    console.log('Box 4 pressed');
  }
  onPress5(){
    console.log('Box 5 pressed');
  }
  onChangeText1(value){
    this.setState({
      textValue:value
    });
  }

  render() {
    return (

      <View style={styles.background}>
            <View style={styles.newsView}>
              <Text style={styles.newsText}>Hello!</Text>
              <Text style={styles.newsText}>Nyhetssaker som kan dukke opp</Text>
            </View>

            <View style={styles.container1}>
              <TouchableOpacity
              style={styles.box1}
              onPress={() => this.props.skjermBytte('NyPost')}
              >
                <View style={styles.box1}>
                  <Text>Ny post</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.boxFav}
                onPress={() => this.props.skjermBytte('Favoritter')}
              >
                <View>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('../pictures/favourites_star.png')}
                    />
                    </View>
                <View>
                    <Text>Favoritter</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity
              style={styles.smallBox}
              onPress={() => this.props.skjermBytte('Lovverk')}
              >
                <View>
                  <Text>Lovverk</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.smallBox}
              onPress={() => this.props.skjermBytte('Ressursbank')}
              >
                <View>
                  <Text>Ressursbank</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.smallBox}
              onPress={() => this.props.skjermBytte('Tips')}
              >
                <View>
                  <Text>Tips og råd</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.mainBox}>
            <ScrollView style={styles.contentBox}>
                <View style={styles.postBox}>
                  <Text>Jeg får ikke støtte fra kollegaene til å håndtere
                  en vanskelig mobbesituasjon</Text>
                  <View style={styles.navntittel}>
                    <Text>Blå katt</Text>
                    <Text>'02.05.18'</Text>
                  </View>
                  <View>
                    <Text>Jeg har prøvd løse en mobbesituasjon, men den er
                    kompleks fordi begge barns foreldre mener deres barn er den
                    utsatte. Jeg trenger støtte fra kollegaer og rektor for å
                    komme noen vei, men de mener skolen har gjort det de kunne.
                    Hva skal jeg gjøre?</Text>
                  </View>
                </View>

                <View style={styles.postBox}>
                  <Text>Tittel på innlegg</Text>
                  <View style={styles.navntittel}>
                    <Text>Blå katt</Text>
                    <Text>Dato</Text>
                  </View>
                  <View>
                    <Text>Teksten i innlegget. Her bør det stå masse greier slik at vi får testet hva som skjer når det står mye her. Skal alt vises eller bare så så mange linjer?</Text>
                  </View>
                </View>

                <View style={styles.postBox}>
                  <Text>Hvordan hjelpe et barn som har lukket seg?</Text>
                  <View style={styles.navntittel}>
                    <Text>Rød Høne</Text>
                    <Text>'30.04.18'</Text>
                  </View>
                  <View>
                    <Text>Et barn i klassen min har det ikke greit, barnet
                    kommer fra et litt tustelig hjem og blir ofte mobbet pga
                    klær, bustet hår, at ingen ser foreldrene o.l. Jeg forsøker
                    å løse situasjonene, men det utsatte barnet har helt lukket
                    seg og sier nesten aldri et ord. Barnet sitter stille og
                    hører, men responderer særs lite. Har noen erfaring med
                    dette? Hvordan kan jeg hjelpe dette fine lille barnet?</Text>
                  </View>
                </View>
            </ScrollView>
            </View>

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
  container2: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#e0ffff',
    justifyContent: 'space-between',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
  },
  box1: {
    flex: 1,
    backgroundColor: '#fcc6c2',
    padding:10,
    justifyContent: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  boxFav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fcc6c2',
    padding:10,
    justifyContent: 'center',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 3
  },
  box3: {
    flex:1
  },
  smallBox: {
    flex:1,
    backgroundColor:'#fdddda',
    padding:2,
    justifyContent: 'center'
  },
  mainBox: {
    flex:10
  },
  contentBox: {
    flex:1
  },
  postBox: {
    height: 150,
    padding: 3,
    backgroundColor: '#e0ffff',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6
  },
  navntittel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
