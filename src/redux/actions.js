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

export const addMeal = (content) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  firestore
    .collection('recipes')
    .add({
      ...content,
    })
    .then(() => {
      dispatch({
        type: ADD_ITEM,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ITEM_FAILURE,
        payload: {
          createErr: err,
        },
      });
    });
};

export const deleteMeal = (mealId) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  firestore
    .collection('recipes')
    .doc(mealId)
    .delete()
    .then(() => {
      dispatch({
        type: DELETE_ITEM,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ITEM_FAILURE,
        payload: {
          deleteErr: err,
        },
      });
    });
};

export const editMeal = (mealId, content) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  firestore
    .collection('recipes')
    .doc(mealId)
    .update({
      ...content,
    })
    .then(() => {
      dispatch({
        type: EDIT_ITEM,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_ITEM_FAILURE,
        payload: {
          updateErr: err,
        },
      });
    });
};
