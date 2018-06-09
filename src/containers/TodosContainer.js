import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import uuid from 'uuid';
import { TodoInputWrapper } from '../components/Input';
import { TodoList } from '../components/List';

class TodosContainer extends Component {
  state = {
    text: '',
    todos: [
      {
        id: uuid(),
        title: '투두 앱 만들기',
        complete: true
      },
      {
        id: uuid(),
        title: '스타일 시트 스니펫 찾기',
        complete: false
      },
      {
        id: uuid(),
        title: '플렉스 박스 연구',
        complete: true
      }
    ],
    filter: {
      all: true,
      complete: false
    }
  };

  handleChange = e => {
    this.setState({
      text: e
    });
  };

  handleComplete = id => {
    const { todos } = this.state;
    const targetIndex = todos.findIndex(v => v.id === id);

    this.setState({
      todos: [
        ...todos.slice(0, targetIndex),
        {
          id: todos[targetIndex].id,
          title: todos[targetIndex].title,
          complete: !todos[targetIndex].complete
        },
        ...todos.slice(targetIndex + 1)
      ]
    });
  };

  handleDelete = id => {
    const { todos } = this.state;
    const targetIndex = todos.findIndex(v => v.id === id);

    this.setState({
      todos: [...todos.slice(0, targetIndex), ...todos.slice(targetIndex + 1)]
    });
  };

  handleSubmit = () => {
    if (this.state.text.length !== 0) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            title: this.state.text,
            complete: false
          }
        ],
        text: ''
      });
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
