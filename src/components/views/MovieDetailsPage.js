import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Spinner from "../Spinner/Spinner";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import MovieInfo from "../MovieInfo/MovieInfo";
import ButtonGoBack from "../ButtonGoBack/ButtonGoBack";
import Modal from "../Modal/Modal";

import routes from "../../routes/routes";
import moviesApi from "../../services/api/moviesApi";

const AsyncCast = lazy(() => import("./Cast" /* webpackChankName: "cast" */));

const AsyncReviews = lazy(() =>
  import("./Reviews" /* webpackChankName: "reviews" */)
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ loading: true });
    this.fetchMovies(movieId);
  }

  fetchMovies = async (movieId) => {
    try {
      const movie = await moviesApi.fetchMovieDetails(movieId);

      this.setState({ movie });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    history.push(state && state.from ? state.from : routes.moviesPage);
  };

  closeModal = () => {
    this.setState({ error: null });
  };

  render() {
    const { movie, loading, error } = this.state;
    const { state } = this.props.location;
    const { match } = this.props;

    return (
      <>
        {loading && <Spinner />}
        {error && <Modal errorMsg={error.message} onClose={this.closeModal} />}
        {movie.title && (
          <>
            <ButtonGoBack onClick={this.handleGoBack} />
            <MovieInfo movie={movie} />
            <AdditionalInformation matchUrl={match.url} locationState={state} />
            <Suspense fallback={<Spinner />}>
              <Route path={`${match.path}/cast`} component={AsyncCast} />
              <Route path={`${match.path}/reviews`} component={AsyncReviews} />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
