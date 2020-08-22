import {
  STORE_ID
} from './types';

export const storeID = id => dispatch => {
  dispatch({
    type: STORE_ID,
    payload: id
  });
};