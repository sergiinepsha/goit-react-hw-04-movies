import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  SearchFormCSS,
  SearchFormButtonCSS,
  SearchFormButtonLabelCSS,
  SearchFormInputCSS,
} from "./styledSearchForm";

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: "",
  };

  /*
   * Processing form input
   */
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  /*
   * Processing form submit
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SearchFormCSS onSubmit={this.handleSubmit}>
        <SearchFormButtonCSS type="submit">
          <SearchFormButtonLabelCSS>Search</SearchFormButtonLabelCSS>
        </SearchFormButtonCSS>

        <SearchFormInputCSS
          type="text"
          placeholder="Search movies"
          value={inputValue}
          onChange={this.handleChange}
        />
      </SearchFormCSS>
    );
  }
}
