import {
  DEC_BREAK_COUNT
} from 'actions/types';

const initialState = {
  breakCount: 3,
  breakMinuteDuration: 2
};

export default (state = initialState, action) => {
  switch(action.type) {
    case DEC_BREAK_COUNT:
      return {
        ...state,
        breakCount: action.payload
      };
    default:
      return state
  }
}