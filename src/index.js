import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title';
import TodoContainer from './containers/TodosContainer';

export default class TodoApp extends Component {
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
