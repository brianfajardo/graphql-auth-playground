import React from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";


import AuthForm from "./AuthForm";

// Queries
import GET_CURRENT_USER from "../queries/GetAuthenticatedUser";

// Mutations
import SIGN_UP_USER from "../mutations/SignUp";

class SignUpForm extends React.Component {
  state = {
    errors: []
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.data.user && this.props.data.user) {
      // Check race condition where a user is currently logged in.
      hashHistory.push("/dashboard");
    }
  }

  handleSignUp = (email, password) => {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: GET_CURRENT_USER }]
      })
      .catch(response => {
        const errors = response.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm onSubmit={this.handleSignUp} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(GET_CURRENT_USER)(graphql(SIGN_UP_USER)(SignUpForm));
