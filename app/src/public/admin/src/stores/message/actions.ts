import * as messageActionTypes from "./actionTypes";

export const showAlert = (text) => {
  return async (dispatch) => {
    dispatch({
      type: messageActionTypes.MESSAGE_ALERT_SHOW,
      text,
    });
  };
};

export const hideAlert = () => {
  return async (dispatch) => {
    dispatch({
      type: messageActionTypes.MESSAGE_ALERT_HIDE,
    });
  };
};
