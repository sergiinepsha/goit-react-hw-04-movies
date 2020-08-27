import React, { Component } from "react";

import SearchForm from "../components/SearchForm/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";

import moviesApi from "../services/api/moviesApi";
import getQueryParams from "../utils/getQueryParams";

import { TotalCSS } from "./styled/styledMoviesPage";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    total_results: 0,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;
    const { query, page } = getQueryParams(location.search);

    if (query) {
      this.fetchMovies(query, page);
    }
  }

  componentDidUpdate(prevProps, _) {
    const { location } = this.props;
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery, page } = getQueryParams(location.search);

    if (nextQuery !== prevQuery) {
      this.fetchMovies(nextQuery, page);
    }
  }

  /*
   * Processing form submit
   */
  handleChangeQuery = (query) => {
    const { history, location } = this.props;

    if (query) {
      history.push({
        ...location,
        search: `query=${query}&page=1`,
      });
    }
  };

  /*
   * Start service Api
   */
  fetchMovies = (query, page) => {
    this.setState({ loading: true });

    moviesApi
      .fetchMoviesWithQuery(query, page)
      .then(({ results, total_results }) => {
        this.setState(() => ({
          movies: [...results],
          total_results,
        }));
      })
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
    const { movies, total_results, loading, error } = this.state;
    const { location } = this.props;

    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        {loading && <Spinner />}
        {error && <Modal errorMsg={error.message} onClose={this.closeModal} />}
        {movies.length > 0 && (
          <>
            <TotalCSS>Total: {total_results}</TotalCSS>
            <MoviesList movies={movies} location={location} />;
          </>
        )}
      </>
    );
  }
}
