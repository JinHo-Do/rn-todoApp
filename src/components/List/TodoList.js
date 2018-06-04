import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, handleComplete, handleDelete, filter }) => {
  let filteredList;

  if (filter.all) {
    filteredList = todos;
  } else if (filter.complete) {
    filteredList = todos.filter(todo => todo.complete);
  } else {
    filteredList = todos.filter(todo => !todo.complete);
  }

  const todoList = filteredList.map((todo, i) => (
    <Todo
      key={i}
      id={todo.id}
      title={todo.title}
      complete={todo.complete}
      backgroundColor={i % 2 === 1}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
    />
  ));

  return (
    <View style={styles.container}>
      <ScrollView>{todoList}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default TodoList;
