import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_FAILURE,
  EDIT_ITEM_FAILURE,
} from 'redux/actionTypes';

const foodlistReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authErr: null,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authErr: payload.authErr,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        signOutErr: null,
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
        signOutErr: payload.signOutErr,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authErr: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authErr: payload.registerErr,
      };
    case ADD_ITEM:
      return {
        ...state,
        createErr: null,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        createErr: payload.createErr,
      };
    case DELETE_ITEM:
      return {
        ...state,
        deleteErr: null,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        deleteErr: payload.deleteErr,
      };
    case EDIT_ITEM:
      return {
        ...state,
        updateErr: null,
      };
    case EDIT_ITEM_FAILURE:
      return {
        ...state,
        updateErr: payload.updateErr,
      };
    default:
      return state;
  }
};

export default foodlistReducer;
