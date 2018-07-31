import React from "react";
import { graphql } from "react-apollo";

// Components
import AuthForm from "./AuthForm";

// Queries
import GET_AUTHENTICATED_USER from "../queries/GetAuthenticatedUser";

// Mutations
import LOGIN from "../mutations/Login";

class LoginForm extends React.Component {
  state = {
    errors: []
  };

  handleAuthSubmit = (email, password) => {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: GET_AUTHENTICATED_USER }]
      })
      .catch(response => {
        const errors = response.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.handleAuthSubmit} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(LOGIN)(LoginForm);
