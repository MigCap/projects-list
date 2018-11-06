import React, { Component, Fragment } from "react";
import NavBar from "./../atoms/NavBar";
import ListaProyectos from "./../atoms/proyectos/ListaProyectos";
import Notifications from "./../atoms/Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth, profile, notifications } = this.props;
    const userId = this.props.profile.firstName + this.props.profile.lastName;

    if (!auth.uid) return <Redirect to="/entrar" />;

    return (
      <Fragment>
        <NavBar />
        <div className="transparent">
          <div className="dashboard container">
            <p className="center-align pt">
              Welcome to OnPoint Projects:
              <Link
                to={"/usuario/" + userId}
                title="Mi Perfil"
                className="blue-grey-text text-darken-2"
              >
                {" "}
                {profile.firstName} {profile.lastName}
                {"."}
              </Link>
            </p>
            <p className="center-align">
              Add your own proyects and check proyects from your colleagues.
            </p>
            <div className="row">
              <div className="col s12 m6">
                <div className="section">
                  <div
                    className="center-align blue-grey darken-4 rounded"
                    style={{ padding: "1em 0" }}
                  >
                    <span className="card-title">
                      <i className="material-icons orange-text text-lighten-2">
                        question_answer
                      </i>
                    </span>
                    <p className="orange-text text-lighten-2">ALL PROJECTS</p>
                  </div>
                  <div>
                    {projects &&
                    !(projects.length === 0) &&
                    !(projects === undefined) ? (
                      <ul className="collection border-none blue-grey darken-4">
                        <ListaProyectos projects={projects} />
                      </ul>
                    ) : (
                      <div className="ptb center-align transparent">
                        <p className="blue-grey-text text-darken-4">
                          There are no projects yet
                        </p>
                        <Link to="/crearproyecto" title="Nuevo Proyecto">
                          <button className="btn btn-large btn-block blue-grey darken-4">
                            CREATE PROYECT
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col s12 m5 offeset-m1">
                <Notifications notifications={notifications} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] },
    { collection: "users" }
  ])
)(Dashboard);
