import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import profilePic from "./../../assets/images/profilePic.jpeg";


class AccesForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    empresa: "",
    cargo: "",
    departamento: "",
    email: "",
    password: "",
    termsConditions: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.userForm(this.state);
  };
  clearAuthError = e => {
    this.props.authError = null;
  };

  render() {
    const { authError } = this.props;

    return (
      <div className="pt center-align">
        <img src={logo} alt="" style={{ width: "180px" }} />
        <h5 style={{ marginTop: "2rem" }}>
          Por favor, para continuar confirme o rellene sus datos
        </h5>
        <br />
        <br />
        <img
          src={profilePic}
          alt=""
          className="circle responsive-img"
          style={{ width: "80px" }}
        />
        <br />
        <br />
        <form onSubmit={this.handleSubmit} className="white">
          <div className="row">
            <div className="col s4">
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="firstName">Nombre *</label>
                <input
                  type="text"
                  required
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="lastName">Apellidos *</label>
                <input
                  type="text"
                  required
                  id="lastName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="company">Empresa *</label>
                <input
                  type="text"
                  required
                  id="company"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="cargo">Cargo</label>
                <input
                  type="text"
                  required
                  id="cargo"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="departamento">Departamento</label>
                <input
                  type="text"
                  required
                  id="departamento"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="col s4">
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="phone1">Teléfono 1</label>
                <input
                  type="tel"
                  required
                  id="phone1"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="phone2">Teléfono 2</label>
                <input
                  type="tel"
                  required
                  id="phone2"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  alternate_email
                </i>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  alternate_email
                </i>
                <label htmlFor="emailSeguridad">Email de seguridad</label>
                <input
                  type="email"
                  id="emailSeguridad"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <p>
                Recuerda que el email de seguridad le servirá para recuperar su
                sesión en caso de cambio de mail.
              </p>
            </div>

            <div className="col s4">
              <div className="input-field">
                <i className="material-icons prefix indigo-text text-accent-4">
                  account_circle
                </i>
                <label htmlFor="projects">Proyectos en común</label>
                <input
                  type="text"
                  required
                  id="projects"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <br />
          <br />
          <div className="container">
            <div className="input-field center-align">
              <button className="btn btn-large btn-block indigo accent-4">
                CONTINUAR
              </button>
            </div>
          </div>
        </form>
        <Link onClick={this.clearAuthError} to="/entrar">
          SALIR
        </Link>
        <br />
        <br />
      </div>
    );
  }
}

export default AccesForm;
