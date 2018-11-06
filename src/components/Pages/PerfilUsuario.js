import React, { Component, Fragment } from "react";
import NavBar from "../atoms/NavBar";
import ListaProyectosUsuario from "../atoms/proyectos/ListaProyectosUsuario";
import Loader from "../atoms/Loader";
import CreateFirstProject from "./CreateFirstProject";
import Notifications from "../atoms/Notifications";
import { deleteProject } from "../../redux/store/actions/projectActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class PerfilUsuario extends Component {

  state= {
    projects: ''
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteProject(e.target.id);
  };
  render() {
    const { projects, auth, profile, notifications } = this.props;
    // console.log(this.props.projects);
    
    let userProjects = projects && projects.filter(project => project.authorId === auth.uid)
    // console.log(userProjects);
    // console.log(this.props)


    if (!auth.uid) return <Redirect to="/entrar" />;

    else if (!userProjects)

      return <Loader />;

      return (
        <Fragment>
          <NavBar />
          <div>
            <div>
              <div className="perfil section pt center-align rounded">
                <p className="">
                  Welcome,
                  <span className="blue-grey-text text-darken-4">
                    {" "}
                    {profile.firstName} {profile.lastName}
                    {"."}
                  </span>
                  <br/>
                  Here you can check your project list and delete projects you
                  finish.
                </p>
              </div>
              <div className="container transparent">
                <div className="row">
                  <div className="col s12 m6">
                    <div className="section">
                      <div
                        className="center-align blue-grey darken-4 rounded"
                        style={{ padding: "1em 0" }}
                      >
                        <span className="card-title orange-text text-lighten-2">
                          <i className="material-icons orange-text text-lighten-2">
                            question_answer
                          </i>
                        </span>
                        <p className="orange-text text-lighten-2">
                          YOUR PROJECTS
                        </p>
                      </div>
                      <div>
                        {userProjects && !(userProjects.length === 0) && !(userProjects === undefined) ? (
                          <ul className="collection rounded border-none">
                            <ListaProyectosUsuario projects={userProjects} handleDelete={this.handleDelete} />
                          </ul>
                        ) : (
                          <CreateFirstProject />
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
          </div>
        </Fragment>
      );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile,
    projects: state.firestore.ordered.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: id => dispatch(deleteProject(id))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "projects", orderBy: ["createdAt", "desc"]
    },
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] },
    { collection: "users" }
  ]),
)(PerfilUsuario);
