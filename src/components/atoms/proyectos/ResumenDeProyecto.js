import React, { Fragment } from "react";
import moment from "moment";

const ResumenDeProyecto = ({ project }) => {
  const initials = project.authorFirstName[0] + project.authorLastName[0];
  return (
    <Fragment>
      <li className="collection-item avatar item row transparent listDetailsStyled">
        <div className="">
          <i className="btn btn-floating waves-effect orange lighten-2">
            {initials}
          </i>
        </div>
        <div className="col">
          <p className="title orange-text text-lighten-2">{project.title}</p>
          <p className="white-text">
            Created by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text text-darken-1">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </li>
    </Fragment>
  );
};

export default ResumenDeProyecto;
