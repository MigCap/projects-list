import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CreateFirstProject extends Component {
  render() {
    return (
      <div className="ptb center-align transparent">
        <p className="blue-grey-text text-darken-4">
          You haven`t created any proyects yet.
        </p>
        <Link to="/crearproyecto" title="New Project">
          <button className="btn btn-large btn-block blue-grey darken-4">
            CREATE PROYECT
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateFirstProject;
