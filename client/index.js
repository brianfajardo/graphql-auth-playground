import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import Router from "./Router";

const client = new ApolloClient({
  // Identify every record from the server so Apollo knows how to store it in local cache.
  dataIdFromObject: o => o.id
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
