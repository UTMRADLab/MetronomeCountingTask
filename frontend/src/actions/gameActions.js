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
  SET_CONFIRM_DONE_PRESSED_FALSE
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

export const setRoundActiveTrue = () => dispatch => {
  dispatch({
    type: SET_ROUND_ACTIVE_TRUE,
    bool: true
  })
};

export const setRoundActiveFalse = () => dispatch => {
  dispatch({
    type: SET_ROUND_ACTIVE_FALSE,
    bool: false
  })
}

export const setSelfCatchPressedTrue = () => dispatch => {
  dispatch({
    type: SET_SELF_CATCH_PRESSED_TRUE,
    bool: true
  })
}

export const setSelfCatchPressedFalse = () => dispatch => {
  dispatch({
    type: SET_SELF_CATCH_PRESSED_FALSE,
    bool: false
  })
}

export const setConfirmDonePressedTrue = () => dispatch => {
  dispatch({
    type: SET_CONFIRM_DONE_PRESSED_TRUE,
    bool: true
  })
}

export const setConfirmDonePressedFalse = () => dispatch => {
  dispatch({
    type: SET_CONFIRM_DONE_PRESSED_FALSE,
    bool: false
  })
}