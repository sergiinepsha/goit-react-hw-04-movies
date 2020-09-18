import React, { Component } from "react";

import CastList from "../CastList/CastList";

import moviesApi from "../../services/api/moviesApi";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";

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

  fetchMovies = async (movieId) => {
    this.setState({ loading: true });

    try {
      const { cast } = await moviesApi.fetchMovieCast(movieId);

      this.setState({ cast: [...cast] });
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
    const { cast, loading, error } = this.state;

    return (
      <>
        {loading && <Spinner />}
        {error && <Modal errorMsg={error.message} onClose={this.closeModal} />}
        <CastList cast={cast} />
      </>
    );
  }
}
