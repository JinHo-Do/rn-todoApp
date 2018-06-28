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

  componentDidMount() {
    this.props.TodoActions.todoInit();
  }

  handleChange = e => {
    this.setState({
      text: e
    });
  };

  handleComplete = id => {
    const { TodoActions } = this.props;
    TodoActions.todoComplete(id);
  };

  handleDelete = id => {
    const { TodoActions } = this.props;
    TodoActions.todoDelete(id);
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
