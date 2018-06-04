import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo App</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#F7F7F7'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30
  }
});

export default Title;
