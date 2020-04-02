import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import gpost from './gpost';

const rootReducer = combineReducers({
  user,
  post,
  gpost,
});

export default rootReducer;