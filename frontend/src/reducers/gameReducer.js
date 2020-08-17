import {
  SET_CYCLE_START_TIME,
  SET_TRIAL_START_TIME,
  SET_SOUND_TIME,
  SET_USER_REACT_TIME
} from 'actions/types';

const initialState = {
  cycleStartTime: 0,
  trialStartTime: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CYCLE_START_TIME:
      return {
        ...state,
        cycleStartTime: action.cycleStartTime
      };
    case SET_TRIAL_START_TIME:
      return {
        ...state,
        trialStartTime: action.trialStartTime
      }
    case SET_SOUND_TIME:
      return {
        ...state,
        soundTime: action.soundTime
      }
    case SET_USER_REACT_TIME:
      return {
        ...state,
        userReactTime: action.userReactTime
      }
    default:
      return state
  }
};