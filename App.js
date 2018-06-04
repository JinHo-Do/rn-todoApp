/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './src/components/Title';
import TodoContainer from './src/containers/TodosContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <TodoContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EDEDF3'
  }
});
