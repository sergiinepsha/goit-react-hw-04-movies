import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  SearchFormCSS,
  SearchFormButtonCSS,
  SearchFormButtonLabelCSS,
  SearchFormInputCSS,
} from "./styledSearchForm";

const INITIAL_STATE = { inputValue: "" };

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    onSubmit(inputValue);
    this.setState({ ...INITIAL_STATE });
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
