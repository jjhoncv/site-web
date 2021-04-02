import * as actionTypes from "./actionTypes";

const initialState = {
  user: null,
  token: null,
  error: null,
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    /* login reducer */

    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token,
        error: null,
        user: action.user,
      };

    /* register reducer */

    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token,
        user: action.user,
      };

    case actionTypes.LOGOUT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
