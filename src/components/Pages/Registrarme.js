import React, { Component } from "react";
import Header from "./../atoms/Header";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../redux/store/actions/authActions";

class Registrarme extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsConditions: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signUp(this.state);
  };
  clearAuthError = e => {
    this.props.authError = null;
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container center-align">
        <Header />
        <form onSubmit={this.handleSubmit} className="transparent ptb">
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">
              account_circle
            </i>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              required
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">
              account_circle
            </i>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              required
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">
              alternate_email
            </i>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">
              lock
            </i>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <p className="">
              <label htmlFor="terms">
                <input type="checkbox" id="terms" required />
                <span className="blue-grey-text text-darken-4">
                  I accept{" "}
                  <span className="termsConditions blue-grey-text text-darken-4">Terms and Conditions</span>
                </span>
              </label>
            </p>
          </div>
          <div className="red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <div className="input-field center-align">
            <button className="btn btn-large btn-block blue-grey darken-4">
              SIGN UP
            </button>
          </div>
        </form>
        <Link onClick={this.clearAuthError} to="/entrar" className="blue-grey-text text-darken-4">
          <h5>
            SIGN IN
          </h5>
        </Link>
        <p className="ptb blue-grey-text text-darken-4">* These fields are required.</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registrarme);
