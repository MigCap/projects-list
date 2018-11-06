import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="center">
        <i
          className="large material-icons blue-grey-text text-darken-4"
          style={{ fontSize: "6rem", marginTop: "0.5em" }}
        >
          bubble_chart
        </i>
        <h4
          className="blue-grey-text text-darken-4"
          style={{ margin: "3rem 0" }}
        >
          Welcome to Onpoint Proyects
        </h4>
      </div>
    );
  }
}

export default Header;
