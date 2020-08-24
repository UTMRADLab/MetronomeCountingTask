  
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import counterReducer from './counterReducer';
import dataReducer from './dataReducer';
import breakReducer from './breakReducer';

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
  data: dataReducer,
  break: breakReducer
});