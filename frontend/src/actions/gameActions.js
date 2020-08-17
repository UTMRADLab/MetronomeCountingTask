import {
  SET_CYCLE_START_TIME,
  SET_TRIAL_START_TIME,
  SET_SOUND_TIME,
  SET_USER_REACT_TIME
} from './types';

export const setCycleStartTime = time => dispatch => {
  dispatch({
    type: SET_CYCLE_START_TIME,
    cycleStartTime: time
  })
};

export const setTrialStartTime = time => dispatch => {
  dispatch({
    type: SET_TRIAL_START_TIME,
    trialStartTime: time
  })
};

export const setSoundTime = time => dispatch => {
  dispatch({
    type: SET_SOUND_TIME,
    soundTime: time
  })
};

export const setUserReactTime = time => dispatch => {
  dispatch({
    type: SET_USER_REACT_TIME,
    userReactTime: time
  })
};