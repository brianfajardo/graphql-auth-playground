import React from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

// Query
import GET_CURRENT_USER from "../../queries/GetAuthenticatedUser";

const requireAuth = Component => {
  class RequireAuth extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return graphql(GET_CURRENT_USER)(RequireAuth);
};

export default requireAuth;
