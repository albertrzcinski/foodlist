import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'foodlist-200a7.firebaseapp.com',
  projectId: 'foodlist-200a7',
  storageBucket: 'foodlist-200a7.appspot.com',
  messagingSenderId: '248369487550',
  appId: '1:248369487550:web:11faff298c02a6e44d08ef',
  measurementId: 'G-Q1SPCKXY6N',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
