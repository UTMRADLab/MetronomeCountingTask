import { SET_CYCLE_START_TIME, SET_TRIAL_START_TIME } from './types';

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

