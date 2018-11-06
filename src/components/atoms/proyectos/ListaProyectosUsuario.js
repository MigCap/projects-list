import React from "react";
import ResumenProyectoUsuario from "./ResumenProyectoUsuario";

const ListaProyectosUsuario = ({ projects, handleDelete }) => {
  // console.log(projects);

  return (
    <div className="section blue-grey darken-4">
      {projects &&
        projects.map(project => {
            return (
              <ResumenProyectoUsuario project={project} key={project.id} handleDelete={handleDelete} />
            );
        })}
    </div>
  );
};

export default ListaProyectosUsuario;
