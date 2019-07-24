import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import TodoApp from './src';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
