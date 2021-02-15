import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Details from './Details';
import Home from './Home';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route path={routes.dinnerMeal} component={Details} />
        <Route path={routes.dinner} component={Dinner} />
        <Route path={routes.lunchMeal} component={Details} />
        <Route path={routes.lunch} component={Lunch} />
        <Route path={routes.breakfastMeal} component={Details} />
        <Route path={routes.breakfast} component={Breakfast} />
        <Route path={routes.home} component={Home} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
