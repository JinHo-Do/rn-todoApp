import * as actions from '../actions/actionTypes';

const initialState = {
  list: []
};

const todo = (state = initialState, action) => {
  const { list } = state;
  let targetIndex;

  switch (action.type) {
    case actions.TODO_INIT:
      return {
        list: action.todos
      };
    case actions.TODO_SUBMIT:
      return {
        list: [
          ...list,
          {
            id: action.id,
            title: action.text,
            complete: false
          }
        ]
      };
    case actions.TODO_COMPLETE:
      targetIndex = list.findIndex(v => v.id === action.id);

      return {
        list: [
          ...list.slice(0, targetIndex),
          {
            ...list[targetIndex],
            complete: !list[targetIndex].complete
          },
          ...list.slice(targetIndex + 1)
        ]
      };
    case actions.TODO_DELETE:
      targetIndex = list.findIndex(v => v.id === action.id);

      return {
        list: [...list.slice(0, targetIndex), ...list.slice(targetIndex + 1)]
      };
    default:
      return state;
  }
};

export default todo;
