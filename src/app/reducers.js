//given a state, actiont hat was called, return new state
// we need redux because it is predictable, you can see whats happening to the state, and can only modify states by firing an actiont

export const ADD_POST = 'ADD_POST'
const  FETCH_POSTS = 'FETCH_POSTS'
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE'
import { combineReducers } from 'redux'

const reddit = (state = [
  {name: 'demo'},
  {name: 'hello'}
], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state
    case FETCH_POSTS_COMPLETE:
      return action.payload;
    case ADD_POST:
      return [
        action.payload,
        ...state
      ]
    default:
      return state;
  }
}

export const reducer = combineReducers({reddit})

// if you have application wide states, and they are lcoally, you don't know who is changing the states
// redux is flux but reducing things, states are in one place, so you can do things like timetravel, logging
// the reducers are pure functions, so there are no side effects and the state is exactly what you described it to be, making it a lot more predictable
