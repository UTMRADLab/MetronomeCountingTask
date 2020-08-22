import {
  STORE_ID
} from 'actions/types';

const initialState = {
  id: -1
};

export default (state = initialState, action) => {
  switch(action.type) {
    case STORE_ID:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state
  }
}