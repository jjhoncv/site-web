import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    /* create */
    case actionTypes.PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.PRODUCT_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [...state.data, action.data],
      };

    /* read */
    case actionTypes.PRODUCT_READ_REQUEST:
      return {
        ...state,
        error: null,
        data: state.data,
        isFetching: true,
      };
    case actionTypes.PRODUCT_READ_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_READ_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };

    /* delete */
    case actionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.PRODUCT_DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: state.data.filter((item) => item.id !== action.id),
      };

    /* update */
    case actionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.PRODUCT_UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: state.data.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                ...action.data,
              }
            : item
        ),
      };

    default:
      return state;
  }
};
