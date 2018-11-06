import React, { Component } from "react";
import { connect } from "react-redux";
import { passResetEmail } from "../../redux/store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class ResetPass extends Component {
  state = {
    email: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.passResetEmail(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    // console.log(this.props);
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container pt">
        <div className="center-align">
        <i className="large material-icons blue-grey-text text-darken-4" style={{ fontSize: "4rem" }}>
          bubble_chart
        </i>
        <h4
          className="blue-grey-text text-darken-4"
          style={{ marginTop: "2rem" }}
        >
          Onpoint Proyects
        </h4>
        </div>
        <br />
        <Link to="/entrar" className="blue-grey-text text-darken-4">Back</Link>
        <div className="center-align pt blue-grey-text text-darken-4">
          <h5>Password Reset</h5>
          <p className="blue-grey-text text-darken-4">
            Fill in with the email you used to sign up. You will receive an email with instroctions to reset your password.
          </p>
          <form onSubmit={this.handleSubmit} className="transparent rounded ptb">
            <div className="input-field">
              <i className="material-icons prefix blue-grey-text text-darken-4 text-accent-4">
                alternate_email
              </i>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
            <div className="input-field center-align pt">
              <button className="btn btn-large btn-block blue-grey darken-4">
                SEND
              </button>
              <Link to="/registrarse" className="blue-grey-text text-darken-4">SIGN UP</Link>
            </div>
          </form>
        </div>
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
    passResetEmail: credentials => dispatch(passResetEmail(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPass);
