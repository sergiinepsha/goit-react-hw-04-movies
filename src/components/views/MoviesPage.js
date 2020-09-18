import React, { Component } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";

import moviesApi from "../../services/api/moviesApi";
import getQueryParams from "../../utils/getQueryParams";

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

  handleChangeQuery = (query) => {
    const { history, location } = this.props;

    if (query) {
      history.push({
        ...location,
        search: `query=${query}&page=1`,
      });
    }
  };

  fetchMovies = async (query, page) => {
    this.setState({ loading: true });

    try {
      const { results, total_results } = await moviesApi.fetchMoviesWithQuery(
        query,
        page
      );

      this.setState(() => ({
        movies: [...results],
        total_results,
      }));
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
