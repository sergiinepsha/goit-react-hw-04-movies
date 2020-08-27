import React, { Component } from "react";
import PropTypes from "prop-types";

import { OverlayCSS, ModalCSS } from "./styledModal";

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    errorMsg: PropTypes.string.isRequired,
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
    const { onClose } = this.props;

    if (code === "Escape") {
      onClose();
    }
  };

  /*
   * Processing a click on the overlay
   */
  handleOverlayClick = ({ target, currentTarget }) => {
    const { onClose } = this.props;

    if (target === currentTarget) {
      onClose();
    }
  };

  render() {
    const { errorMsg } = this.props;

    return (
      <OverlayCSS onClick={this.handleOverlayClick}>
        <ModalCSS>
          <p>{errorMsg}</p>
        </ModalCSS>
      </OverlayCSS>
    );
  }
}
