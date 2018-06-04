import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoInputButton = ({ handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4052B0',
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 3
  },
  buttonText: {
    color: 'white'
  }
});

export default TodoInputButton;
