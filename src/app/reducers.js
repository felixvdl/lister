// given incoming state, do an action and create a new state
// what are the actions that we need to do:
// create a todo
// remove would be another action
import { combineReducers} from 'redux'
export const CREATE_TODO = 'CREATE_TODO'

const user = (state = {}, action) => {
  return state;
}

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        action.payload,
        ...state
      ];
    default:
      return state;
  }
};

export const reducer = combineReducers({
  todos: todos,
  user: user
})
