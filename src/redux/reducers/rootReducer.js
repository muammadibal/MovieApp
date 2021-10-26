import {combineReducers} from 'redux';
import {movieReducer} from './index';

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;
