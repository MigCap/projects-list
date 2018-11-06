import React, { Fragment } from "react";
import NavBar from "./../NavBar";
import Loader from "../Loader";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const DetallesProyecto = props => {
  // console.log(props);
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/entrar" />;
  if (project) {
    return (
      <Fragment>
        <NavBar />
        <div className="container section nuevo-proyecto">
          <div className="card z-depth-0  blue-grey darken-4 rounded border-none">
            <div className="card-content">
              <span className="card-title orange-text text-lighten-2"><h4>
                {project.title}
              </h4></span>
              <p className="white-text">{project.content}</p>
            </div>
            <div className="card-action blue-grey-text text-lighten-1">
              <div>
                Created by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
            <div className="center-align" style={{ display: "inline-block" }}>
          </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Loader />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  // console.log(projects)
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(DetallesProyecto);
