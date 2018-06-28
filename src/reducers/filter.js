import * as actions from '../actions/actionTypes';

const initialState = {
  all: true,
  complete: false
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case actions.TODO_FILTER_ALL:
      return {
        all: true,
        complete: false
      };
    case actions.TODO_FILTER_COMPLETE:
      console.log('complete');
      return {
        all: false,
        complete: true
      };
    case actions.TODO_FILTER_ACTIVE:
      return {
        all: false,
        complete: false
      };

    default:
      return state;
  }
};

export default filter;
