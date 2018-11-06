import React from "react";
import ResumenDeProyecto from "./ResumenDeProyecto";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const ListaProyectos = ({ projects }) => {
  if (projects)
    return (
      <div className="section">
        {projects &&
          projects.map(project => {
            return (
              <Link to={"/project/" + project.id} key={project.id}>
                <ResumenDeProyecto project={project} />
              </Link>
            );
          })}
      </div>
    );
  else return <Loader />;
};

export default ListaProyectos;
