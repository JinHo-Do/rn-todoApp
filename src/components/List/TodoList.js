import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
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

  const Separator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => (
    <Todo
      id={item.id}
      title={item.title}
      complete={item.complete}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
    />
  );

  return filteredList.length ? (
    <View style={styles.container}>
      <FlatList
        data={filteredList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </View>
  ) : (
    <View style={styles.emptyList}>
      <Text>Empty List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray'
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TodoList;
