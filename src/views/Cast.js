import React, { Component } from "react";

import CastList from "../components/CastList/CastList";

import moviesApi from "../services/api/moviesApi";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";

export default class Cast extends Component {
  state = {
    cast: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.fetchMovies(movieId);
  }

  /*
   * Start service Api
   */
  fetchMovies = (movieId) => {
    this.setState({ loading: true });

    moviesApi
      .fetchMovieCast(movieId)
      .then(({ cast }) => this.setState({ cast: [...cast] }))
      .catch((error) => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  /*
   * Close modal window
   */
  closeModal = () => {
    this.setState({ error: null });
  };

  render() {
    const { cast, loading, error } = this.state;
    return (
      <>
        {loading && <Spinner />}
        {error && <Modal error={error} onCloseModal={this.closeModal} />}
        <CastList cast={cast} />
      </>
    );
  }
}
