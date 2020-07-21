import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";
import moviesApi from "../services/api/moviesApi";
import getQueryParams from "../utils/getQueryParams";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";
import { TotalCSS } from "./styled/styledMoviesPage";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    total_results: 0,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query, page } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query, page);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery, page } = getQueryParams(
      this.props.location.search
    );

    if (nextQuery !== prevQuery) {
      this.fetchMovies(nextQuery, page);
    }
  }

  /*
   * Processing form submit
   */
  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}&page=1`,
    });
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
    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        {loading && <Spinner />}
        {error && <Modal error={error} onCloseModal={this.closeModal} />}
        {movies.length > 0 && (
          <>
            <TotalCSS>Total: {total_results}</TotalCSS>
            <MoviesList movies={movies} location={this.props.location} />;
          </>
        )}
      </>
    );
  }
}
