import React from "react";
import { Router as ReactRouter, hashHistory, Route, IndexRoute } from "react-router";

import App from "./components/App";

const Router = () => (
  <ReactRouter history={hashHistory}>
    <Route path="/" component={App}>
        
    </Route>
  </ReactRouter>
);

export default Router;
