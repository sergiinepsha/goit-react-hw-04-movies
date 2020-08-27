import React, { Component } from "react";

import MoviesList from "../components/MoviesList/MoviesList";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";

import moviesApi from "../services/api/moviesApi";

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchMovies();
  }

  /*
   * Start service Api
   */
  fetchMovies = () => {
    moviesApi
      .fetchMoviesTrendy()
      .then(({ results }) => this.setState({ movies: [...results] }))
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
    const { movies, loading, error } = this.state;
    const { location } = this.props;

    return (
      <>
        {loading && <Spinner />}
        {error && <Modal errorMsg={error.message} onClose={this.closeModal} />}
        {movies.length > 0 && (
          <MoviesList movies={movies} location={location} />
        )}
      </>
    );
  }
}
