import React, { Component, Fragment } from "react";
import NavBar from "../NavBar";
import { connect } from "react-redux";
import { createProject } from "../../../redux/store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CrearProyecto extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    if (this.props)
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;
    // console.log(this.props)
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Fragment>
        <NavBar />
        <div className="container ptb transparent">
          <h5 className="grey-text text-darken-3">Create a new proyect</h5>
          <form onSubmit={this.handleSubmit} className="transparent">
            <div className="input-field">
              <i className="material-icons prefix blue-grey-text text-darken-4">
                book
              </i>
              <label htmlFor="title">Proyect Tittle</label>
              <input
                required
                type="text"
                id="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <i className="material-icons prefix blue-grey-text text-darken-4">
                mode_edit
              </i>
              <label htmlFor="content">Proyect Content</label>
              <textarea
                className="materialize-textarea"
                id="content"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn blue-grey darken-4">SAVE</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrearProyecto);
