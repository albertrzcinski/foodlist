import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import foodlistReducer from './foodlistReducer';

const rootReducer = combineReducers({
  foodlist: foodlistReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
