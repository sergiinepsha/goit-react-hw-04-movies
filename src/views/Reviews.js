import React, { Component } from "react";

import ReviewsList from "../components/ReviewsList/ReviewsList";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";

import moviesApi from "../services/api/moviesApi";

export default class Reviews extends Component {
  state = {
    reviews: [],
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
      .fetchMovieReviews(movieId)
      .then(({ results }) => this.setState({ reviews: [...results] }))
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
    const { reviews, loading, error } = this.state;

    return (
      <>
        {loading && <Spinner />}
        {error && <Modal errorMsg={error.message} onClose={this.closeModal} />}
        <ReviewsList reviews={reviews} />
      </>
    );
  }
}
