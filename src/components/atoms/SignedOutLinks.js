import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/registrarse">Registrarme</NavLink>
      </li>
      <li>
        <NavLink to="/entrar">Entrar</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
