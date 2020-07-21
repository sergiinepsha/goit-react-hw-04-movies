import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";
import moviesApi from "../services/api/moviesApi";
import Spinner from "../components/Spinner/Spinner";
import AdditionalInformation from "../components/AdditionalInformation/AdditionalInformation";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import ButtonGoBack from "../components/ButtonGoBack/ButtonGoBack";
import Modal from "../components/Modal/Modal";

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

  /*
   * Start service Api
   */
  fetchMovies = (movieId) => {
    moviesApi
      .fetchMovieDetails(movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  /*
   * Processing a click on the button "GoBack"
   */
  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    history.push(state && state.from ? state.from : routes.moviesPage);
  };

  /*
   * Close modal window
   */
  closeModal = () => {
    this.setState({ error: null });
  };

  render() {
    const { movie, loading, error } = this.state;
    const { state } = this.props.location;

    return (
      <>
        {loading && <Spinner />}
        {error && <Modal error={error} onCloseModal={this.closeModal} />}
        {movie.title && (
          <>
            <ButtonGoBack onClick={this.handleGoBack} />
            <MovieInfo movie={movie} />
            <AdditionalInformation
              matchUrl={this.props.match.url}
              locationState={state}
            />
            <Suspense fallback={<Spinner />}>
              <Route
                path={`${this.props.match.path}/cast`}
                component={AsyncCast}
              />
              <Route
                path={`${this.props.match.path}/reviews`}
                component={AsyncReviews}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
