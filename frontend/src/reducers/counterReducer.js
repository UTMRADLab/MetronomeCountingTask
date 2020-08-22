import {
  START_BLOCK_TIMER,
  STOP_BLOCK_TIMER,
  TICK_BLOCK_TIMER
} from 'actions/types';

const initialState = {
  blockTimerCount: 0,
  blockTimer: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case START_BLOCK_TIMER:
      return {
        ...state,
        blockTimer: action.payload
      };
    case STOP_BLOCK_TIMER:
      return {
        ...state,
        blockTimer: null
      };
    case TICK_BLOCK_TIMER:
      return {
        ...state,
        blockTimerCount: action.payload
      };
    default:
      return state
  }
}