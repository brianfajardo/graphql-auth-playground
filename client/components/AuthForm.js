import React from 'react'

class AuthForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = (input, event) => {
    this.setState({ [input]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.handleFormSubmit}>
          {/* Email input */}
          <div className="input-field">
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleInputChange('email', e)}
            />
          </div>
          {/* Password input */}
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handleInputChange('password', e)}
            />
          </div>
          {/* Errors */}
          <div className="errors">
            {this.props.errors.map(error => (
              <div key={error}>{error}</div>
            ))}
          </div>
          {/* Submit button */}
          <button type="submit" className="btn green">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AuthForm
