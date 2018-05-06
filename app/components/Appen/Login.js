import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
   TextInput, Switch, Image } from 'react-native';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      textB:'',
      textP:'',
      switchValue: false
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.newsView}>
          <Text>Nyhetssaker og sånt</Text>
          <Text>Hallo</Text>
        </View>
        <View style={styles.mainField}>
          <View style={styles.loginGreie}>
            <Text>Brukernavn:</Text>
            <Text>Passord:</Text>
          </View>
          <View style={styles.loginGreie}>
          <TextInput
            style={{padding: 10}, {width: 150}}
            placeholder="Brukernavn her"
            onChangeText={(textB) => this.setState({textB})}
          />
            <TextInput
              style={{padding: 10}, {width: 150}}
              placeholder="Passord her"
              onChangeText={(textP) => this.setState({textP})}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:10,
    backgroundColor: '#4682b4'
  },
  newsView: {
    flex:1,
    backgroundColor: 'blue',
    padding:5
  },
  logoContainer: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainField: {
    flex: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginGreie: {
    alignSelf: 'stretch'
  },
  logo: {
    width: 100,
    height: 100
  }

})
