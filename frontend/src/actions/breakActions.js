import store from '../store';
import {
  DEC_BREAK_COUNT
} from './types';

export const decBreakCount = () => dispatch => {
  dispatch({
    type: DEC_BREAK_COUNT,
    payload: store.getStore().break.breakCount-1
  });
};