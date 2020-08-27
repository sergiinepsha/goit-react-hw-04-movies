import React from "react";

import routes from "../../routes";

import { NavListCSS, NavItemCSS, NavItemLinkCSS } from "./styledNavigation";

export default function Navigation() {
  const { home, moviesPage } = routes;

  return (
    <NavListCSS>
      <NavItemCSS>
        <NavItemLinkCSS to={home}>Home</NavItemLinkCSS>
      </NavItemCSS>
      <NavItemCSS>
        <NavItemLinkCSS to={moviesPage}>Movies</NavItemLinkCSS>
      </NavItemCSS>
    </NavListCSS>
  );
}
