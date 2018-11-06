import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Entrar, Registrarme, ResetPass, AccesForm, PerfilUsuario } from "./components";
import Dashboard from "./components/molecules/Dashboard";
import CrearProyecto from "./components/atoms/proyectos/CrearProyecto";
import DetallesProyecto from "./components/atoms/proyectos/DetallesProyecto";

import "./assets/css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/entrar" component={Entrar} />
            <Route path="/registrarse" component={Registrarme} />
            <Route path="/recuperarpass" component={ResetPass} />
            <Route path="/formacceso" component={AccesForm} />
            <Route path="/crearproyecto" component={CrearProyecto} />
            <Route path="/project/:id" component={DetallesProyecto} />
            <Route exact path="/usuario/:id" component={PerfilUsuario} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
