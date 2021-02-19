import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import store from 'redux/store';
import { Provider, useSelector } from 'react-redux';
import firebase from 'firebaseConfig';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Details from './Details';
import Home from './Home';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return null;
  return children;
};

const Root = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={{}}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <MainTemplate>
        <BrowserRouter>
          <AuthIsLoaded>
            <Switch>
              <Route path={routes.dinnerMeal} component={Details} />
              <Route path={routes.dinner} component={Dinner} />
              <Route path={routes.lunchMeal} component={Details} />
              <Route path={routes.lunch} component={Lunch} />
              <Route path={routes.breakfastMeal} component={Details} />
              <Route path={routes.breakfast} component={Breakfast} />
              <Route path={routes.home} component={Home} />
            </Switch>
          </AuthIsLoaded>
        </BrowserRouter>
      </MainTemplate>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default Root;
