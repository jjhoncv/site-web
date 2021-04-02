import * as authActionTypes from "./actionTypes";
import * as authService from "./services";

export const login = (param) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    try {
      const { user, token } = await authService.login(param);
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        token,
        user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, error: e.message });
    }
  };
};

export const register = (param) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.REGISTER_REQUEST });
    try {
      const { user, token } = await authService.register(param);
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        token,
        user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.REGISTER_FAILURE, error: e.message });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: authActionTypes.LOGOUT });
  };
};
