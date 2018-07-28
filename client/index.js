import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";

import Router from "./Router";

// Creating a custom network interface to be compatible with PassportJS in the backend.
const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    // Send cookies along to PassportJS for queries
    credentials: "same-origin"
  }
});

const client = new ApolloClient({
  networkInterface,
  // Identify every record from the server so Apollo knows how to store it in local cache.
  dataIdFromObject: o => o.id
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
