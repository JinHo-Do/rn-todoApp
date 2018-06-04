import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TodoInput = ({ onSubmitEditing, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder="Add a new task"
      returnKeyType="done"
      autoCorrect={false}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 2.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D4D4D4'
  }
});

export default TodoInput;
