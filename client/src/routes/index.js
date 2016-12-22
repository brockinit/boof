import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Dashboard from '../containers/Dashboard';
import CostToValue from '../containers/CostToValue';
import EntryHistory from '../containers/EntryHistory';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="fanduel" component={CostToValue} />
    <Route path="entries" component={EntryHistory} />
  </Route>
);

export default () => <Router history={hashHistory} routes={routes} />;
