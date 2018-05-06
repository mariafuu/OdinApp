import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput, Switch } from 'react-native';

export default class Appen extends Component {
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
              onPress={this.onPress1}
              >
                <View style={styles.box1}>
                  <Text>Ny post</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.box1}
                onPress={this.onPress2}
              >
                <View style={styles.box1}>
                  <View>
                    <Text>Favoritt 1</Text>
                  </View>
                  <View>
                    <Text>Favoritt 2</Text>
                  </View>
                  <View>
                    <Text>Favoritt 3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress3}
              >
                <View>
                  <Text>Lovverk</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress4}
              >
                <View>
                  <Text>Ressursbank</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress5}
              >
                <View>
                  <Text>Tips og råd</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.mainBox}>
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
                  <Text>Nyeste poster</Text>
                  <View>
                    <Text>Hvordan burde jeg..?</Text>
                    <Text>Kan jeg...?</Text>
                  </View>
                </View>
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
  postBox: {
    height: 100,
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
