import React, { Fragment } from "react";
import NavBar from "./../atoms/NavBar";
import ListaProyectos from "./../atoms/proyectos/ListaProyectosUsuario";
import Notifications from "./../atoms/Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Perfil = props => {
  const { projects, auth, profile, notifications } = props;
  console.log(props);

  
  if (!auth.uid) {return <Redirect to="/entrar" />}
  else if (projects && projects === undefined) {
    return (
      <Fragment>
        <NavBar />
        <div className="perfil section ptb center-align rounded">
          <h5 className="">
            Bienvenid&#64; a tu perfil,
            <span className="blue-text">
              {" "}
              {profile.firstName} {profile.lastName}
              {"."}
            </span>
          </h5>
        </div>
        <div className="container ptb grey lighten-5 rounded p-5 center-align">
          <p className="blue-text">
            No tienes proyectos, por favor, añade uno para continuar.
          </p>
          <Link to="/crearproyecto" title="Nuevo Proyecto">
            <button className="btn btn-large btn-block blue accent-4">
              CREAR PROYECTO
            </button>
          </Link>
        </div>
      </Fragment>
    );
  } else if (projects) {
    return (
      <Fragment>
        <NavBar />
        <div className="perfil section ptb center-align rounded">
          <h5 className="">
            Bienvenid&#64; a tu perfil,
            <span className="blue-text">
              {" "}
              {profile.firstName} {profile.lastName}
              {"."}
            </span>
          </h5>
        </div>
        <div className="container ptb grey lighten-5 rounded">
          <div className="row">
            <div className="col s12 m6 center-align">
              <h4 className="blue-text">Lista de Proyectos</h4>
              <ListaProyectos projects={projects} />
            </div>
            <div className="col s12 m5 offeset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="container center viewportCenter">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: "projects", where: ["authorId", "==", props.auth.uid] },
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] },
    { collection: "users" }
  ])
)(Perfil);
