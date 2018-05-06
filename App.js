import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
   TextInput, Switch, Image } from 'react-native';

import Forside from './app/components/Appen/Forside.js';
import Profil from './app/components/Appen/Profil.js';
import NyPost from './app/components/Appen/NyPost.js';
import Login from './app/components/Appen/Login.js';
import Favoritter from './app/components/Appen/Favoritter.js';
import SearchResult from './app/components/Appen/SearchResult.js';
import Appen from './app/components/Appen/Appen.js';

import Forum from './app/components/Forum/Forum.js';
import Subforum from './app/components/Forum/Subforum.js';
import Forumpost from './app/components/Forum/Forumpost.js';

import DokumentRessurs from './app/components/Ressursbank/DokumentRessurs.js';
import LydRessurs from './app/components/Ressursbank/LydRessurs.js';
import NyRessurs from './app/components/Ressursbank/NyRessurs.js';
import PresentasjonRessurs from './app/components/Ressursbank/PresentasjonRessurs.js';
import Ressursbank from './app/components/Ressursbank/Ressursbank.js';
import RessursKategori from './app/components/Ressursbank/RessursKategori.js';
import VideoRessurs from './app/components/Ressursbank/VideoRessurs.js';

export default class Odin extends Component {
  constructor(){
    super();
    this.state ={
      currentScreen: Forside,
    }
    this.screens = {
      Forside,
      Profil
    }
  }

  skjermBytte = (screenName) => {
    this.setState ({currentScreen: this.screens[screenName]})
  }

  render(){
      return(
        <View style={{flex:1}}>
          <View>
            <Text>Hallo!</Text>
          </View>
          <this.state.currentScreen skjermBytte={this.skjermBytte} />
        </View>
      );
    }
  }
