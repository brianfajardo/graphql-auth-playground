import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

// Queries
import GET_AUTHENTICATED_USER from "../queries/GetAuthenticatedUser";

// Mutations
import LOGOUT from "../mutations/Logout";

class Header extends React.Component {
  handleLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query: GET_AUTHENTICATED_USER }]
    });
  };

  renderButtons = () => {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.handleLogout}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(LOGOUT)(graphql(GET_AUTHENTICATED_USER)(Header));
