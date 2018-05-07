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
        <View style={styles.logoContainer}>
        </View>

        <View style={styles.mainField}>

          <View style={styles.loginGreie}>
            <View style={styles.textBox}>
              <Text>Brukernavn:</Text>
            </View>
            <View style={styles.textBox}>
              <Text>Passord:</Text>
            </View>
          </View>
          <View style={styles.loginGreie}>
          <TextInput
            style={styles.inputBox}
            placeholder="Brukernavn her"
            onChangeText={(textB) => this.setState({textB})}
          />
            <TextInput
              style={styles.inputBox}
              placeholder="Passord her"
              onChangeText={(textP) => this.setState({textP})}
            />

          </View>

          <View>
            <View>
              <TouchableOpacity
                style={styles.vanligKnapp}
                onPress={() => this.props.skjermBytte('Forside')}
              >
                <Text>Logg inn</Text>
                </TouchableOpacity>
            </View>
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
  textBox: {
    backgroundColor: '#c2dbfc',
    padding: 10,
    height: 50
  },
  inputBox: {
    padding: 10,
    width: 150,
    height: 50,
    backgroundColor: 'white'
  },
  logoContainer: {
    flex :4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vanligKnapp: {
    backgroundColor: '#fcc6c2',
    height: 40,
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBox: {

  },
  mainField: {
    flex: 8,
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
