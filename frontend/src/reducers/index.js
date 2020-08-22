  
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import counterReducer from './counterReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
  data: dataReducer
});