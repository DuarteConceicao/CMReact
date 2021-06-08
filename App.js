/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TestScheduler } from '@jest/core';

var styles = require('./components/LoginStyle.js');


const App: () => React$Node = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sempre a Horas</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.inputMargin}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.inputMargin}></TextInput>
          <Button title="Entrar" style={styles.button}/>
        </View>
      </View>
    </View>
  );
}


export default App;