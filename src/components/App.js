import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../routes";
import LayoutCSS from "./LayoutCSS";
import AppHeader from "./AppHeader/AppHeader";
import AppFooter from "./AppFooter/AppFooter";
import Spinner from "./Spinner/Spinner";

const AsyncHomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);

const AsyncMoviesPage = lazy(() =>
  import("../views/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

export default function App() {
  const { home, moviesPage, movieDetailsPage } = routes;

  return (
    <>
      <AppHeader />
      <LayoutCSS>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={home} exact component={AsyncHomePage} />
            <Route path={moviesPage} exact component={AsyncMoviesPage} />
            <Route path={movieDetailsPage} component={AsyncMovieDetailsPage} />
            <Redirect to={home} />
          </Switch>
        </Suspense>
      </LayoutCSS>
      <AppFooter />
    </>
  );
}
