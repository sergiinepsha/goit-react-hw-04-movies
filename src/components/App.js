import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import LayoutCSS from "./LayoutCSS";
import AppHeader from "./AppHeader/AppHeader";
// import HomePage from "../views/HomePage";
// import MoviesPage from "../views/MoviesPage";
// import MovieDetailsPage from "../views/MovieDetailsPage";
import AppFooter from "./AppFooter/AppFooter";
import Spinner from "./Spinner/Spinner";

const AsyncHomePage = lazy(() =>
  import("../views/HomePage" /* webpackChankName: "home-page" */)
);

const AsyncMoviesPage = lazy(() =>
  import("../views/MoviesPage" /* webpackChankName: "movies-page" */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage" /* webpackChankName: "movies-details-page" */
  )
);

// export default function App() {
//   return (
//     <>
//       <AppHeader />
//       <LayoutCSS>
//         <Switch>
//           {routes.map((route) => (
//             <Route key={route.path} {...route} />
//           ))}
//           <Redirect to="/" />
//         </Switch>
//       </LayoutCSS>
//       <AppFooter />
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <AppHeader />
      <LayoutCSS>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={routes.home} exact component={AsyncHomePage} />
            <Route path={routes.moviesPage} exact component={AsyncMoviesPage} />
            <Route
              path={routes.movieDetailsPage}
              component={AsyncMovieDetailsPage}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </LayoutCSS>
      <AppFooter />
    </>
  );
}
