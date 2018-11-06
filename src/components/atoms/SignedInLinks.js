import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/store/actions/authActions";

const SignedInLinks = props => {
  const userId = props.profile.firstName + props.profile.lastName;
  // console.log(userId);
  return (
    <ul className="right">
      <li>
        <NavLink to="/crearproyecto" title="Nuevo Proyecto">
          <i className="material-icons right orange-text text-lighten-2">
            add_circle
          </i>
          <span className="orange-text text-lighten-2">Add Project</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" title="Home">
          <i className="material-icons prefix orange-text text-lighten-2">
            view_day
          </i>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/usuario/" + userId}
          title="Mi Perfil"
          className="btn btn-floating waves-effect orange darken-1 white-text navStyle"
        >
          {props.profile.initials}
        </NavLink>
      </li>
      <li>
        <a href="/entrar" onClick={props.signOut} title="Cerrar Sesion">
          <i className="material-icons prefix orange-text text-lighten-2">
            power_settings_new
          </i>
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    users: state.firestore.data.users
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(SignedInLinks);
