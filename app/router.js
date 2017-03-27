import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Login } from './components/login/Login';
import { Layout } from './components/login/Layout';
import { Register } from './components/login/Register';

const router = (

  <Router history={hashHistory}>
	<Route path="/" component={Layout}>
	    <Route path='login' component={ Login }></Route>
	    <Route path='register' component={ Register }></Route>
	</Route>
  </Router>
);

export { router };
