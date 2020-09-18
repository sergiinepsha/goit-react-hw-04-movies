import React, { Component } from "react";

import ReviewsList from "../ReviewsList/ReviewsList";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";

import moviesApi from "../../services/api/moviesApi";

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchReviews(movieId);
  }

  fetchReviews = async (movieId) => {
    try {
      const { results } = await moviesApi.fetchMovieReviews(movieId);

      this.setState({ reviews: [...results] });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

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
