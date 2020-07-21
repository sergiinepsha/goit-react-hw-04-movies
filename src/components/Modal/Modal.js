import React, { Component } from "react";
import PropTypes from "prop-types";

import { OverlayCSS, ModalCSS } from "./styledModal";

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  /*
   * Processing keydown
   */
  handleKeydown = ({ code }) => {
    if (code === "Escape") {
      this.props.onCloseModal();
    }
  };

  /*
   * Processing a click on the overlay
   */
  handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { error } = this.props;
    return (
      <OverlayCSS onClick={this.handleOverlayClick}>
        <ModalCSS>
          <p>{error}</p>
        </ModalCSS>
      </OverlayCSS>
    );
  }
}
