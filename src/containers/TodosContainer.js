import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import uuid from 'uuid';
import { TodoInputWrapper } from '../components/Input';
import { TodoList } from '../components/List';

class TodosContainer extends Component {
  state = {
    text: '',
    todos: [],
    filter: {
      all: true,
      complete: false
    }
  };

  async componentDidMount() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const getTodoList = await AsyncStorage.multiGet(keys);
      const previousTodoList = getTodoList.map(item => JSON.parse(item[1]));

      this.setState({
        todos: previousTodoList
      });
    } catch (error) {
      console.warn(error);
    }
  }

  handleChange = e => {
    this.setState({
      text: e
    });
  };

  handleComplete = async id => {
    try {
      const { todos } = this.state;
      const targetIndex = todos.findIndex(v => v.id === id);
      const updatedTodo = {
        id: todos[targetIndex].id,
        title: todos[targetIndex].title,
        complete: !todos[targetIndex].complete
      };

      await AsyncStorage.mergeItem(id, JSON.stringify(updatedTodo));

      this.setState({
        todos: [...todos.slice(0, targetIndex), updatedTodo, ...todos.slice(targetIndex + 1)]
      });
    } catch (error) {
      console.warn(error);
    }
  };

  handleDelete = async id => {
    try {
      const { todos } = this.state;
      const targetIndex = todos.findIndex(v => v.id === id);

      await AsyncStorage.removeItem(id);

      this.setState({
        todos: [...todos.slice(0, targetIndex), ...todos.slice(targetIndex + 1)]
      });
    } catch (error) {
      console.warn(error);
    }
  };

  handleSubmit = async () => {
    if (this.state.text.length !== 0) {
      try {
        const id = uuid();
        const todo = {
          id,
          title: this.state.text,
          complete: false
        };

        await AsyncStorage.setItem(id, JSON.stringify(todo));

        this.setState({
          todos: [...this.state.todos, todo],
          text: ''
        });
      } catch (e) {
        console.warn(e);
      }
    }
  };

  handleFilterAll = () => {
    this.setState({
      filter: {
        all: true,
        complete: false
      }
    });
  };

  handleFilterComplete = () => {
    this.setState({
      filter: {
        all: false,
        complete: true
      }
    });
  };

  handleFilterActive = () => {
    this.setState({
      filter: {
        all: false,
        complete: false
      }
    });
  };

  render() {
    const { todos, text, filter } = this.state;
    const {
      handleChange,
      handleSubmit,
      handleComplete,
      handleDelete,
      handleFilterActive,
      handleFilterAll,
      handleFilterComplete
    } = this;

    return (
      <View style={styles.container}>
        <TodoInputWrapper
          value={text}
          filter={filter}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onListAll={handleFilterAll}
          onListComplete={handleFilterComplete}
          onListActive={handleFilterActive}
        />
        <TodoList
          filter={filter}
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TodosContainer;
