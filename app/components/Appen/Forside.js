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
                  Forside
                </Text>
              </View>
              <TouchableOpacity
                style={{flex:1}}
                onPress={() => this.props.skjermBytte('SearchResult')}>
                  <Text style={styles.toolbarFont}>Søk</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container1}>
              <TouchableOpacity
              style={styles.vanligKnapp}
              onPress={() => this.props.skjermBytte('NyPost')}
              >
                <View>
                  <Text>Nytt innlegg</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.vanligKnapp}
                onPress={() => this.props.skjermBytte('Favoritter')}
              >
                <View>
                  <Image
                    style={{width: 30, height: 30}}
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
              style={styles.litenKnapp}
              onPress={() => this.props.skjermBytte('Lovverk')}
              >
                <View>
                  <Text>Lovverk</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.litenKnapp}
              onPress={() => this.props.skjermBytte('Ressursbank')}
              >
                <View>
                  <Text>Ressursbank</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.litenKnapp}
              onPress={() => this.props.skjermBytte('Tips')}
              >
                <View>
                  <Text>Tips og råd</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.feedTittel}>Nyeste innlegg:</Text>
            </View>

            <View
              style={{
                borderBottomColor: '#1ba6cf',
                borderBottomWidth: 3,
                shadowColor: 'rgb(255, 255, 255)',

                shadowRadius: 0

              }}
            />
            <View
              style={{
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 1.5,


              }}
            />


            <View style={styles.mainBox}>
            <ScrollView style={styles.contentBox}>
                <TouchableOpacity style={styles.postBox}>
                  <Text style={styles.postTittel}>Jeg får ikke støtte fra kollegaene til å håndtere
                  en vanskelig mobbesituasjon</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Blå katt</Text>
                    <Text style={styles.navnTittel}>23.05.18</Text>
                  </View>
                  <View>
                    <Text>Jeg har prøvd løse en mobbesituasjon, men den er
                    kompleks fordi begge barns foreldre mener deres barn er den
                    utsatte. Jeg trenger støtte fra kollegaer og rektor for å
                    komme noen vei, men de mener skolen har gjort det de kunne.
                    Hva skal jeg gjøre?</Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: '#fcc6c2',
                    borderBottomWidth: 3,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                />

                <TouchableOpacity style={styles.postBox}>
                  <Text style={styles.postTittel}>Slides nettmobbing universitetsnivå</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Lilla Glass</Text>
                    <Text style={styles.navnTittel}>23.05.18</Text>
                  </View>
                  <View>
                    <Text>Jeg brukte denne presentasjonen i går og syns det fungerte bra.
                    Klassen responderte bra på det og, de følgte meg og stilte mange spørsmål.
                    Det ble og debatt om hva som teller som mobbing, om "trolling" er unntatt og
                    effekten anonymitet har. Det er tema som engasjerer mange!</Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: '#fcc6c2',
                    borderBottomWidth: 3,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                />

                <TouchableOpacity style={styles.postBox} onPress={() => this.props.skjermBytte('Forumpost')}>
                  <Text style={styles.postTittel}>Hvordan hjelpe et barn som har lukket seg?</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Rød Høne</Text>
                    <Text style={styles.navnTittel}>22.05.18</Text>
                  </View>
                  <View>
                    <Text>Et barn i klassen min har det ikke greit, barnet
                    kommer fra et litt tustelig hjem og blir ofte mobbet pga
                    klær, bustet hår, at ingen ser foreldrene o.l. Jeg forsøker
                    å løse situasjonene, men det utsatte barnet har helt lukket
                    seg og sier nesten aldri et ord. Barnet sitter stille og
                    hører, men responderer særs lite. Har noen erfaring med
                    dette? Hvordan kan jeg hjelpe dette flotte barnet?</Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: '#fcc6c2',
                    borderBottomWidth: 3,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                />

                <TouchableOpacity style={styles.postBox} onPress={() => this.props.skjermBytte('Forumpost')}>
                  <Text style={styles.postTittel}>Finnes det gode tips til innledning når mobbing skal tas opp som tema i klassen?</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Marineblå Seilduk</Text>
                    <Text style={styles.navnTittel}>22.05.18</Text>
                  </View>
                  <View>
                    <Text>Vi snakket om mobbing på foreldremøtet i min datters 8. klasse. Jeg er foreldrekontakt og vi foreldre ønsket at læreren skulle diskutere mobbing i klassen. Det er ikke et stort problem hos oss, men vi ønsker at ungene våre skal ha gode holdninger. Læreren ville gjerne gjøre det, men visste ikke helt hvordan. Har dere noen ideer?</Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: '#fcc6c2',
                    borderBottomWidth: 3,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                />

                <TouchableOpacity style={styles.postBox} onPress={() => this.props.skjermBytte('Forumpost')}>
                  <Text style={styles.postTittel}>Er dette oppgavesettet greit?</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Lysegrønt Håp</Text>
                    <Text style={styles.navnTittel}>22.05.18</Text>
                  </View>
                  <View>
                    <Text>Jeg lagde disse oppgavene som skal løses av eldre barn på barneskolenivå.
                    De kan ses i lenken nederst i innlegget. Jeg lurer på om de er for overfladiske, eller at
                    elevene vil syns de er kjedelige og ikke bry seg. Er det noen tips til forbedringer?</Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: '#fcc6c2',
                    borderBottomWidth: 3,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                />

                <TouchableOpacity style={styles.postBox} onPress={() => this.props.skjermBytte('Forumpost')}>
                  <Text style={styles.postTittel}>Hjelp til tolking av lovvverk</Text>
                  <View
                    style={{
                      borderBottomColor: '#1ba6cf',
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.navnTittelFelt}>
                    <Text style={styles.navnTittel}>Oransj Kjøleskap</Text>
                    <Text style={styles.navnTittel}>21.05.18</Text>
                  </View>
                  <View>
                    <Text>Det står i oppll. §8.1 at andre tiltak må være prøvd. Vi har gjort en del,
                    bl.a. foreldresamtale og skjerpet fokus i klassene generelt. Anmerkninger og utviselse hjelper ikke.
                    Hva er det utover det vi kan gjøre som er "andre tiltak"?</Text>
                  </View>
                </TouchableOpacity>
            </ScrollView>
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
  container1: {
    flex:2,
    flexDirection: 'row',

    justifyContent: 'space-between',

  },
  postTittel: {


    color: '#02013a',
    fontSize: 20,



  },
  container2: {
    flex:1,
    flexDirection: 'row',

    justifyContent: 'space-between',

    borderRadius: 4,

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

  litenKnapp: {
    flex:1,
    backgroundColor:'rgba(237, 249, 255, 0.5)',
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderColor: '#fcc6c2',
    borderRadius: 15,
    borderWidth: 3,
    margin: 3
  },
  mainBox: {
    flex:10
  },
  contentBox: {
    flex:1,
    marginTop: 10,
  },
  postBox: {

    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(237, 249, 255, 0.5)',


  },
  navnTittelFelt: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  navnTittel: {
    marginTop: 2,
    fontWeight: 'bold',
    color: '#e0ffff'
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
  },

  feedTittel: {
    color: '#1ba6cf',
    fontSize: 30,
    marginTop: 20,
    marginLeft: 5,
    fontWeight: 'bold',
    textShadowColor: 'rgb(255, 255, 255)',
    textShadowOffset: {width: -1.5, height: 1.5},
    textShadowRadius: 0

  }
})
