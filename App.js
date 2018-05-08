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
import Tips from './app/components/Appen/Tips.js';
import Feide from './app/components/Appen/Feide.js';
import TestPost from './app/components/Appen/TestPost.js';

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
      previousScreen: Appen,
      currentScreen: VideoRessurs
    }
    this.screens = {
      Forside, Profil, NyPost, Login, Favoritter, SearchResult, Appen, Tips, Feide,
      Forum, Subforum, Forumpost, TestPost,
      DokumentRessurs, LydRessurs, NyRessurs, PresentasjonRessurs, Ressursbank,
      RessursKategori, VideoRessurs
    }
  }

  skjermBytte = (screenName) => {
    this.setState ({currentScreen: this.screens[screenName]})
  }

  skjermBytteNyPost = (screenName, nyKat, nyTittel, nyInnlegg, nyTag) => {
    this.setState ({currentScreen: this.screens[screenName]})
    TestPost.setState ({})
  }

  render(){
      return(
        <View style={{flex:1}}>
          <View style={styles.toolbar}>
            <View style={{flex:1}}>
              <Text style={styles.toolbarFont}>Meny</Text>
            </View>
            <View style={{flex:4}}>
              <Text style={styles.toolbarFont}>
                Dette vil bli en toolbar!
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.toolbarFont}>Søk</Text>
            </View>
          </View>
          <View style={{flex:8}}>
            <this.state.currentScreen skjermBytte={this.skjermBytte} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    toolbar: {
      flex: 1,
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
