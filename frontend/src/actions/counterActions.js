import store from 'store';
import {
  START_BLOCK_TIMER,
  STOP_BLOCK_TIMER,
  TICK_BLOCK_TIMER
} from './types';

export const startBlockTimer = () => dispatch => {
  const interval = setInterval(store.dispatch(
      { type: TICK_BLOCK_TIMER }
    ),
    1000
  );
  dispatch({
    type: START_BLOCK_TIMER,
    payload: interval
  });
};

export const stopBlockTimer = () => dispatch => {
  const interval = store.getStore().counter.blockTimer;
  if(interval !== null) {
    clearInterval(interval);
  }
  dispatch({
    type: STOP_BLOCK_TIMER
  })
};

export const tickBlockTimer = () => dispatch => {
  dispatch({
    type: TICK_BLOCK_TIMER,
    payload: store.getStore().counter.blockTimerCount+1
  })
}