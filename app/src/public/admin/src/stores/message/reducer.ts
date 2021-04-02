import * as actionTypes from "./actionTypes";

const initialState = {
  text: null,
};

export const messageAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_ALERT_SHOW:
      return {
        ...state,
        text: action.text,
      };
    case actionTypes.MESSAGE_ALERT_HIDE:
      return {
        initialState,
      };
    default:
      return state;
  }
};
