import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class ResumenProyectoUsuario extends Component {
  render() {
    const { project, handleDelete } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <li className="collection-item avatar item blue-grey darken-4 listDetailsStyled">
          <div className="" style={{ width: "80%", display: "inline-block" }}>
            <Link to={"/project/" + project.id}>
              <p className="title orange-text text-lighten-2 element-hover">
                {project.title}
              </p>
              <p className="white-text">{project.content}</p>
            </Link>
            <p className="grey-text">
              Created by {project.authorFirstName} {project.authorLastName}.{" "}
              {moment(project.createdAt.toDate()).calendar()}
            </p>
          </div>
          <div className="center-align" style={{ display: "inline-block" }}>
            <button className="btn-flat transparent" onClick={handleDelete}>
              <i
                className="material-icons orange-text text-lighten-2 element-hover"
                id={project.id}
                style={{ fontSize: "2em" }}
              >
                delete_forever
              </i>
            </button>
          </div>
        </li>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default compose(
  connect(
    mapStateToProps
  ),
  firestoreConnect(props => [
    { collection: "projects" },
    { collection: "users" }
  ])
)(ResumenProyectoUsuario);
