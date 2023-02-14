import React, { Component } from "react";

//Input: liked:boolean
//Output: onClick

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.onClick}
        style={{ curser: "pointer" }}
      ></i>
    );
  }
}

export default Like;
