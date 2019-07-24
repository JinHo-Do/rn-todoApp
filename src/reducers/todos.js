import * as actions from '../actions/actionTypes';
import { AsyncStorage } from 'react-native';

const initialState = {
  list: []
};

const todo = (state = initialState, action) => {
  const { list } = state;
  let targetIndex, updateTodo, newItem;

  switch (action.type) {
    case actions.TODO_INIT:
      return {
        list: action.todos
      };
    case actions.TODO_SUBMIT:
      newItem = {
        id: action.id,
        title: action.text,
        complete: false
      };

      AsyncStorage.setItem(action.id, JSON.stringify(newItem));

      return {
        list: [...list, newItem]
      };
    case actions.TODO_COMPLETE:
      targetIndex = list.findIndex(v => v.id === action.id);

      updateTodo = {
        ...list[targetIndex],
        complete: !list[targetIndex].complete
      };

      AsyncStorage.mergeItem(action.id, JSON.stringify(updateTodo));

      return {
        list: [...list.slice(0, targetIndex), updateTodo, ...list.slice(targetIndex + 1)]
      };
    case actions.TODO_DELETE:
      AsyncStorage.removeItem(action.id);

      targetIndex = list.findIndex(v => v.id === action.id);

      return {
        list: [...list.slice(0, targetIndex), ...list.slice(targetIndex + 1)]
      };
    default:
      return state;
  }
};

export default todo;
