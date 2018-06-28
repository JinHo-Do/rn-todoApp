import * as types from './actionTypes';
import { AsyncStorage } from 'react-native';

export const todoInit = () => dispatch => {
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiGet(keys))
    .then(todoList => todoList.map(item => JSON.parse(item[1])))
    .then(todos => {
      dispatch({
        type: types.TODO_INIT,
        todos
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const todoComplete = id => ({
  type: types.TODO_COMPLETE,
  id
});

export const todoDelete = id => ({
  type: types.TODO_DELETE,
  id
});

export const todoSubmit = (id, text) => ({
  type: types.TODO_SUBMIT,
  id,
  text
});

export const todoFilterAll = () => ({
  type: types.TODO_FILTER_ALL
});

export const todoFilterComplete = () => ({
  type: types.TODO_FILTER_COMPLETE
});

export const todoFilterActive = () => ({
  type: types.TODO_FILTER_ACTIVE
});
