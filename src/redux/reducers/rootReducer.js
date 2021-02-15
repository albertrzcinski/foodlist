import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import foodlistReducer from './foodlistReducer';

const rootReducer = combineReducers({
  foodlist: foodlistReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
