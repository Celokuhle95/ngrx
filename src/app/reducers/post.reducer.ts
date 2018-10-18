import {Action} from '@ngrx/store';
import {Post} from '../models/post.module';
import * as PostActions from '../actions/post.action';
import {EditText} from '../actions/post.action';

// Default app state
const defaultState: Post = {
  text: 'Life is great sometimes is my default post',
  likes: 0
};

// Helper function to create new state object
const newState = (state: Post, newData) => {
  return Object.assign({}, state, newData);
};

// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      const editTextAction: EditText = <EditText>action;
      return newState(state, {text: editTextAction.payload});
    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});
    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}

