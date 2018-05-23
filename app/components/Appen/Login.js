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
      <View style={styles.toolbar}>
        <View style={{flex:4}}>
          <Text style={styles.toolbarFont}>
            Logg inn med FEIDE
          </Text>
        </View>
      </View>
        <View style={styles.logoContainer}>
        </View>
        <View>
          <Text style={styles.mellomOverskrift}>Din konto:</Text>
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

          </View>

        </View>
        <View>
          <TouchableOpacity
            style={styles.vanligKnapp}
            onPress={() => this.props.skjermBytte('Forside')}
          >
            <Text>Logg inn</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    paddingLeft: 10,
    height: 45,
    marginLeft: 10,
    marginBottom: 5
  },
  inputBox: {
    paddingLeft: 5,
    paddingTop: 5,
    marginLeft: 5,
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
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    height: 40,
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fcc6c2',
    borderRadius: 50,
    borderWidth: 3,
    marginLeft: 190,
    marginBottom: 140

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
  },

  toolbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff',
    paddingTop: 20,
  },
  toolbarFont: {
    fontSize:30,
    fontWeight: 'bold',
    color: '#1ba6cf',
    textAlign: 'center'

  },

  mellomOverskrift: {
    color: '#02013a',
    fontSize: 20,
    margin: 5
  }

})
