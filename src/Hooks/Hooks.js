import React, { Component } from "react";
import ClassComponent from "./ClassComponent";
import FncComponent from "./FncComponent";
export default class Hooks extends Component {
  state = {
    check: true,
  };
  render() {
    const { check } = this.state;
    return (
      <div>
        Component: {check ? "Class Component:" : "Func Component"}
        <br />
        <hr />
        <button
          onClick={() => {
            this.setState({ check: !check });
          }}
        >
          Check
        </button>
        {check ? <ClassComponent /> : <FncComponent />}
      </div>
    );
  }
}
