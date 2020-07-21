import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Spinner extends Component {
  render() {
    return <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />;
  }
}
