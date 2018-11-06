import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  // console.log(props);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-extended">
        <div className="nav-wrapper blue-grey darken-4">
          <Link to="/" className="brand-logo left orange-text text-lighten-2">
            <i
              className="large material-icons"
              style={{ fontSize: "4rem", paddingLeft: "2rem" }}
            >
              bubble_chart
            </i>
            OnPoint Projects
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
