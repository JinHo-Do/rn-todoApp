import React from 'react';
import { StyleSheet, View } from 'react-native';
import Filter from './Filter';
import TodoInput from './TodoInput';
import TodoInputButton from './TodoInputButton';

const TodoInputWrapper = ({
  value,
  filter,
  handleChange,
  handleSubmit,
  onListAll,
  onListComplete,
  onListActive
}) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TodoInput value={value} onChangeText={handleChange} onSubmitEditing={handleSubmit} />
      <TodoInputButton handleSubmit={handleSubmit} />
    </View>
    <Filter
      filter={filter}
      onListAll={onListAll}
      onListComplete={onListComplete}
      onListActive={onListActive}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#D4D4D4',
    borderBottomColor: '#D4D4D4',
    backgroundColor: '#EFF0F4'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default TodoInputWrapper;
