import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions';

import { TodoInputWrapper } from '../components/Input';
import { TodoList } from '../components/List';

class TodosContainer extends Component {
  state = {
    text: ''
  };

  // async componentDidMount() {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     const getTodoList = await AsyncStorage.multiGet(keys);
  //     const previousTodoList = getTodoList.map(item => JSON.parse(item[1]));
  //     const { TodoActions } = this.props;

  //     TodoActions.todoInit(previousTodoList);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }

  handleChange = e => {
    this.setState({
      text: e
    });
  };

  handleComplete = id => {
    const { TodoActions } = this.props;
    TodoActions.todoComplete(id);
    // try {
    //   const { todos } = this.props;
    //   const targetIndex = todos.findIndex(v => v.id === id);
    //   const updatedTodo = {
    //     id: todos[targetIndex].id,
    //     title: todos[targetIndex].title,
    //     complete: !todos[targetIndex].complete
    //   };

    //   await AsyncStorage.mergeItem(id, JSON.stringify(updatedTodo));

    //   this.setState({
    //     todos: [...todos.slice(0, targetIndex), updatedTodo, ...todos.slice(targetIndex + 1)]
    //   });
    // } catch (error) {
    //   console.warn(error);
    // }
  };

  handleDelete = id => {
    const { TodoActions } = this.props;
    TodoActions.todoDelete(id);
    // try {
    //   const { todos } = this.props;
    //   const targetIndex = todos.findIndex(v => v.id === id);

    //   await AsyncStorage.removeItem(id);

    //   this.setState({
    //     todos: [...todos.slice(0, targetIndex), ...todos.slice(targetIndex + 1)]
    //   });
    // } catch (error) {
    //   console.warn(error);
    // }
  };

  handleSubmit = () => {
    const { TodoActions } = this.props;
    const { text } = this.state;
    let id;

    if (text.length > 0) {
      id = uuid();

      TodoActions.todoSubmit(id, text);

      this.setState({
        text: ''
      });
      // try {
      //   const id = uuid();
      //   const todo = {
      //     id,
      //     title: this.state.text,
      //     complete: false
      //   };

      //   await AsyncStorage.setItem(id, JSON.stringify(todo));

      //   this.setState({
      //     todos: [...this.state.todos, todo],
      //     text: ''
      //   });
      // } catch (e) {
      //   console.warn(e);
      // }
    }
  };

  handleFilterAll = () => {
    const { TodoActions } = this.props;
    TodoActions.todoFilterAll();
  };

  handleFilterComplete = () => {
    const { TodoActions } = this.props;
    TodoActions.todoFilterComplete();
  };

  handleFilterActive = () => {
    const { TodoActions } = this.props;
    TodoActions.todoFilterActive();
  };

  render() {
    const { todos, filter } = this.props;
    console.log('todos: ', todos, filter);
    const { text } = this.state;
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

const mapStateToProps = state => ({
  todos: state.todos.list,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
