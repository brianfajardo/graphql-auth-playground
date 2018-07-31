import React from "react";
import { Router as ReactRouter, hashHistory, Route, IndexRoute } from "react-router";

import App from "./components/App";
import LoginForm from "./components/LoginForm";

const Router = () => (
  <ReactRouter history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/login" component={LoginForm} />
    </Route>
  </ReactRouter>
);

export default Router;
