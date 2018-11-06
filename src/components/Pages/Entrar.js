import React, { Component } from "react";
import Header from "./../atoms/Header";
import { connect } from "react-redux";
import { signIn } from "../../redux/store/actions/authActions";
import { Redirect } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

class Entrar extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    // console.log(this.props);
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <Header />
        <form onSubmit={this.handleSubmit} className="transparent rounded">
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">alternate_email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix blue-grey-text text-darken-4">lock</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
          <div className="input-field center-align">
            <Link to="/recuperarpass" className="aUnderline blue-grey-text text-darken-4">Recover Password</Link>
            <button className="btn btn-large btn-block blue-grey darken-4">
              SIGN IN
            </button>
            <NavLink to="/registrarse" className="blue-grey-text text-darken-4">SIGN UP</NavLink>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(state);
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entrar);
