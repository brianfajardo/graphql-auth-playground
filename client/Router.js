import React from "react";
import {
  Router as ReactRouter,
  hashHistory,
  Route,
  IndexRoute
} from "react-router";

import App from "./components/App";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Dashboard from "./components/Dashboard";
import requireAuth from "./components/HOC/requireAuth";

const Router = () => (
  <ReactRouter history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/dashboard" component={requireAuth(Dashboard)} />
    </Route>
  </ReactRouter>
);

export default Router;
