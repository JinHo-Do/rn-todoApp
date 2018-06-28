import * as types from './actionTypes';

export const todoInit = todos => ({
  type: types.TODO_INIT,
  todos
});

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

export const todoFilterComplete = () => {
  console.log('com actions');
  return {
    type: types.TODO_FILTER_COMPLETE
  };
};

export const todoFilterActive = () => ({
  type: types.TODO_FILTER_ACTIVE
});
