import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
   TextInput, Switch, Image, Picker } from 'react-native';


export default class Feide extends Component {
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
          <Text style={styles.mellomOverskrift}>Velg institusjon:</Text>
        </View>
        <View style={styles.mainField}>

          <View style={styles.loginGreie}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: 200, backgroundColor: 'white'}}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="UiA" value="uia" />
                <Picker.Item label="NTNU" value="ntnu" />
                <Picker.Item label="UiO" value="uio" />
            </Picker>
          </View>

          <View style={styles.loginGreie}>
            <TouchableOpacity
              style={styles.vanligKnapp}
              onPress={() => this.props.skjermBytte('Login')}
            >
              <Text>Neste</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(237, 249, 255, 0.5)',
    height: 40,
    width: 100,
    padding: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fcc6c2',
    borderRadius: 50,
    borderWidth: 3,

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
