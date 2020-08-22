import {
  SET_CYCLE_START_TIME,
  SET_TRIAL_START_TIME,
  SET_SOUND_TIME,
  SET_USER_REACT_TIME,
  SET_ROUND_ACTIVE_TRUE,
  SET_ROUND_ACTIVE_FALSE,
  SET_SELF_CATCH_PRESSED_TRUE,
  SET_SELF_CATCH_PRESSED_FALSE,
  SET_CONFIRM_DONE_PRESSED_TRUE,
  SET_CONFIRM_DONE_PRESSED_FALSE,
  INC_GAME_COUNT,
  INC_USER_COUNT,
  RESET_GAME_COUNT,
  RESET_USER_COUNT
} from 'actions/types';

const initialState = {
  cycleStartTime: 0,
  trialStartTime: 0,
  soundTime: 0,
  userReactTime: 0,
  selfCatchPressed: false,
  confirmDonePressed: false,
  gameCount: -1,
  usrCount: 0
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
    case SET_ROUND_ACTIVE_TRUE:
      return {
        ...state,
        roundActive: action.bool
      }
    case SET_ROUND_ACTIVE_FALSE:
      return {
        ...state,
        roundActive: action.bool
      }
    case SET_SELF_CATCH_PRESSED_TRUE:
      return {
        ...state,
        selfCatchPressed: action.bool
      }
    case SET_SELF_CATCH_PRESSED_FALSE:
      return {
        ...state,
        selfCatchPressed: action.bool
      }
    case SET_CONFIRM_DONE_PRESSED_TRUE:
      return {
        ...state,
        confirmDonePressed: action.bool
      }
    case SET_CONFIRM_DONE_PRESSED_FALSE:
      return {
        ...state,
        confirmDonePressed: action.bool
      }
    case INC_GAME_COUNT:
      return {
        ...state,
        gameCount: action.payload
      };
    case INC_USER_COUNT:
      return {
        ...state,
        usrCount: action.payload
      };
    case RESET_GAME_COUNT:
      return {
        ...state,
        gameCount: 0
      }
    case RESET_USER_COUNT:
      return {
        ...state,
        usrCount: 0
      }
    default:
      return state
  }
};