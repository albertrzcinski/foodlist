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
} from './actionTypes';

export const logIn = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: AUTH_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAILURE, payload: { authErr: err } });
    });
};

export const logOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: SIGNOUT_FAILURE, payload: { signOutErr: err } });
    });
};

export const register = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAILURE, payload: { registerErr: err } });
    });
};

export const addMeal = (content) => ({
  type: ADD_ITEM,
  payload: {
    meal: { ...content },
  },
});

export const deleteMeal = (mealName) => ({
  type: DELETE_ITEM,
  payload: {
    mealName,
  },
});

export const editMeal = (mealName, content) => ({
  type: EDIT_ITEM,
  payload: {
    mealName,
    content,
  },
});
