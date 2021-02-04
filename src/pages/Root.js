import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { routes } from 'routes';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Details from './Details';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route path={routes.dinnerMeal} component={Details} />
          <Route path={routes.dinner} component={Dinner} />
          <Route path={routes.lunchMeal} component={Details} />
          <Route path={routes.lunch} component={Lunch} />
          <Route path={routes.breakfastMeal} component={Details} />
          <Route path={routes.breakfast} component={Breakfast} />
          <Redirect to={routes.breakfast} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
