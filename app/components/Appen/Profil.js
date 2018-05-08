import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Switch } from 'react-native';

export default class Profil extends Component {
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


            <View style={styles.newsView}>
              <Text style={styles.newsText}>Hello!</Text>
              <Text style={styles.newsText}>Nyhetssaker som kan dukke opp</Text>
            </View>

            <View style={styles.container1}>
              <TouchableOpacity
              style={styles.button1}
              onPress={this.onPress1}
              >
                <View style={styles.button1}>
                  <Text>Nytt innlegg</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress3}
              >
                <View>
                  <Text>Mine innlegg</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress4}
              >
                <View>
                  <Text>Uvisst enda</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity
              style={styles.smallBox}
              onPress={this.onPress5}
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
                  <Text>Favoritter</Text>
                </View>
                <View style={styles.postBox}>
                  <Text>Innstillinger</Text>
                </View>
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
