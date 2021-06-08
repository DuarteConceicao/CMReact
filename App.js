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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TestScheduler } from '@jest/core';

export default function App(){
  return (
      <View style={styles.title}>
        <Text>Calendários</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    backgroundColor: 'blue',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  center: {
    marginTop: 20,
    alignItems: 'center',
  },
  group: {
    marginTop: 20,
  },
  label: {
    color: "black",
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  input: {
    padding: 10,
    height: 40,
    borderWidth: 0,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff3300',
    padding: 5,
    borderWidth: 2,
    borderColor: "#ff3300",
    borderRadius: 6, 
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: 'center',
  },
  result: {
    fontSize: 50,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
  },
});